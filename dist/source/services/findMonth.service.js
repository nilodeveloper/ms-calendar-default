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
exports.run = void 0;
const monthNumberToString_dictionary_1 = __importDefault(require("../dictionary/monthNumberToString.dictionary"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function run(month) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const days = yield prisma.day.findMany({
                where: {
                    mes: Number(month),
                }
            });
            return {
                data: days,
                message: `Retornado com sucesso todos os dias do mês ${monthNumberToString_dictionary_1.default[String(month)]}`,
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
