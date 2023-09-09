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
exports.onlyOneEventPerTime = void 0;
const client_1 = require("@prisma/client");
const generic_error_1 = __importDefault(require("../../errors/generic.error"));
const createEvent_message_json_1 = __importDefault(require("../../messages/createEvent.message.json"));
const prisma = new client_1.PrismaClient();
/*
onlyOneEventPerTime

Pode-se ter apenas um evento por horário. Por exemplo, de 16 as 18 a sala de reuniões
está alocada para um evento (reunião com o chefe)
Se alguém tentar marcar um outro evento (reunião com empresa x) na sala de reunião
 de 16 as 18 no mesmo dia retornará um erro.

*/
function onlyOneEventPerTime(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const event_ = yield prisma.event.findMany({
                where: {
                    idHorario: event.idHorario
                }
            });
            if (event_ && event_.length != 0) {
                throw {
                    data: {},
                    message: createEvent_message_json_1.default.onlyOneEvent,
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
exports.onlyOneEventPerTime = onlyOneEventPerTime;
