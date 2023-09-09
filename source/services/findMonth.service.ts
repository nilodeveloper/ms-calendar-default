import * as repository from '../repository/findMonth.repository'
import monthDict from '../dictionary/monthNumberToString.dictionary'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function run(month: Number) {
    try {
        const days = await prisma.day.findMany({
            where:{
                mes: Number(month),
            }
        })

        return {
            data:days,
            message: `Retornado com sucesso todos os dias do mês ${monthDict[String(month)]}`,
            statusCode: 200
        }
    } catch (e) {
        return {
            message: e,
            statusCode: 500
        }
    }
}
