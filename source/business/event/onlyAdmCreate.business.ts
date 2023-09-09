import { PrismaClient } from '@prisma/client'
import message from '../../messages/createEvent.message.json'
import generic from '../../errors/generic.error'

const prisma = new PrismaClient()
/*
onlyAdmCreate

Apenas administrador pode criar alguns tipos de eventos,
 por exemplo, evento de manutenção, evento de limpeza e etc.

*/
export async function onlyAdmCreate(event: any) {
    try {
        const typeEvent = await prisma.typeEvent.findUnique({
            where:{
                id: event.tipo
            }
        })
        if(!typeEvent){
            throw {
                data: {},
                message: message.notTypeEventInDatabase,
                statusCode: 400
            }
        }else if(typeEvent && typeEvent.onlyAdmCrate == 1){
            throw {
                data: {},
                message: message.onlyAdmCanEvent,
                statusCode: 400
            }
        }

    } catch (error) {
        if(error.statusCode)
            throw error
        else
            throw generic
    }
}
