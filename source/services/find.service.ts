import * as repository from '../repository/find.repository'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function run(month: number) {
    try {
        const days = await prisma.day.findMany({
            where:{
                feriado: 1,
                mes: month
            }
        })

        console.log(days)

        return {
            data:{
                dias:days
            },
            message: "days",
            statusCode: 200
        }
    } catch (e) {
        return {
            message: e,
            statusCode: 500
        }
    }
}
