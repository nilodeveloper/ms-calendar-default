import * as repository from '../repository/findNextHoliday.repository'
import { getDayMonthYear } from '../utils/getDayMonthYear.utils'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function run(body: any) {
    try {
        const today = body.today
        const date = getDayMonthYear(today)
        const mes = Number(date.mes)
        const ano = Number(date.ano)
        
        let feriado = {
            dia:0,
            mes:0,
            ano:0
        }

        const days = await prisma.day.findMany({
            where:{
                feriado: 1,
                mes:{
                    gt: mes
                },
                ano
            }
        })

        days.forEach((day: any) => {
            if(day.feriado == 1){
                feriado = day
                return day
            }
        });

        return {
            data:feriado,
            message: `O Próximo feriado será ${feriado.dia}/${feriado.mes}/${feriado.ano}.`,
            statusCode: 200
        }
    } catch (e) {
        return {
            message: e,
            statusCode: 500
        }
    }
}
