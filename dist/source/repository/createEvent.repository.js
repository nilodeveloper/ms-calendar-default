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
exports.createEvent = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createEvent(body) {
    return __awaiter(this, void 0, void 0, function* () {
        const event = yield prisma.event.create({
            data: {
                dia: body.dia,
                mes: body.mes,
                ano: body.ano,
                nome: body.nome,
                descricao: body.descricao,
                tipo: body.tipo,
                emailCriador: body.emailCriador,
                emailDonoEvento: body.emailDonoEvento,
                diaInteiro: body.diaInteiro,
                idHorario: body.idHorario
            }
        });
        return event;
    });
}
exports.createEvent = createEvent;
