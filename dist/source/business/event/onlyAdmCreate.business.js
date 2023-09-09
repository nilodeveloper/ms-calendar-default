"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onlyAdmCreate = void 0;
const client_1 = require("@prisma/client");
const createEvent_message_json_1 = __importDefault(require("../../messages/createEvent.message.json"));
const generic_error_1 = __importDefault(require("../../errors/generic.error"));
const prisma = new client_1.PrismaClient();
/*
onlyAdmCreate

Apenas administrador pode criar alguns tipos de eventos,
 por exemplo, evento de manutenção, evento de limpeza e etc.

*/
function onlyAdmCreate(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const typeEvent = yield prisma.typeEvent.findUnique({
                where: {
                    id: event.tipo
                }
            });
            if (!typeEvent) {
                throw {
                    data: {},
                    message: createEvent_message_json_1.default.notTypeEventInDatabase,
                    statusCode: 400
                };
            }
            else if (typeEvent && typeEvent.onlyAdmCrate == 1) {
                throw {
                    data: {},
                    message: createEvent_message_json_1.default.onlyAdmCanEvent,
                    statusCode: 400
                };
            }
        }
        catch (error) {
            if (error.statusCode)
                throw error;
            else
                throw generic_error_1.default;
        }
    });
}
exports.onlyAdmCreate = onlyAdmCreate;
