import { PrismaClient } from '@prisma/client'
import genericError from '../../errors/generic.error'
import message from '../../messages/createEvent.message.json'
const prisma = new PrismaClient()

/*
onlyOneEventPerTime

Pode-se ter apenas um evento por horário. Por exemplo, de 16 as 18 a sala de reuniões
está alocada para um evento (reunião com o chefe)
Se alguém tentar marcar um outro evento (reunião com empresa x) na sala de reunião
 de 16 as 18 no mesmo dia retornará um erro.

*/

export async function onlyOneEventPerTime(event: Event) {
    try {
        const event_ = await prisma.event.findMany({
            where:{
                idHorario: event.idHorario
            }
        })
        if(event_ && event_.length != 0){
            throw {
                data: {},
                message: message.onlyOneEvent,
                statusCode: 400
            }
        }
    } catch (error) {
        if(error.statusCode)
            throw error
        else
            throw genericError
    }
}
