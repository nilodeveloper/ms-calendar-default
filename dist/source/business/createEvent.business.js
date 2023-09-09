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
Object.defineProperty(exports, "__esModule", { value: true });
exports.onlyAdmCreate = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function onlyAdmCreate(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const typeEvent = yield prisma.typeEvent.findUnique({
                where: {
                    id: event.tipo
                }
            });
            if (typeEvent && typeEvent.onlyAdmCrate == Number(process.env.ONLY_ADM_CREATE_TYPE_EVENT)) {
                throw Error;
            }
        }
        catch (e) {
            throw {
                data: {},
                message: "Não é possível criar um evento deste tipo.",
                statusCode: 400
            };
        }
    });
}
exports.onlyAdmCreate = onlyAdmCreate;
