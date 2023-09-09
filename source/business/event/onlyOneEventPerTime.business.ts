import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function onlyOneEventPerTime(event: Event) {
    try {
        const event_ = await prisma.event.findMany({
            where:{
                idHorario: event.idHorario
            }
        })
        if(event_ && event_.length != 0){
            throw Error
        }
    } catch (e) {
        throw {
            data:{},
            message:"Não é possível criar um evento pois alguém já reservou esse horário", 
            statusCode: 400
        }
    }
}
