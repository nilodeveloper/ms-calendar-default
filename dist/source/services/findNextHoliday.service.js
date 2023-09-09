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
exports.run = void 0;
const getDayMonthYear_utils_1 = require("../utils/getDayMonthYear.utils");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function run(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const today = body.today;
            const date = (0, getDayMonthYear_utils_1.getDayMonthYear)(today);
            const mes = Number(date.mes);
            const ano = Number(date.ano);
            let feriado = {
                dia: 0,
                mes: 0,
                ano: 0
            };
            const days = yield prisma.day.findMany({
                where: {
                    feriado: 1,
                    mes: {
                        gt: mes
                    },
                    ano
                }
            });
            days.forEach((day) => {
                if (day.feriado == 1) {
                    feriado = day;
                    return day;
                }
            });
            return {
                data: feriado,
                message: `O Próximo feriado será ${feriado.dia}/${feriado.mes}/${feriado.ano}.`,
                statusCode: 200
            };
        }
        catch (e) {
            return {
                message: e,
                statusCode: 500
            };
        }
    });
}
exports.run = run;
