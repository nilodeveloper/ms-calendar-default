import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createEvent(body: Event) {
    const event = await prisma.event.create({
        data:{
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
    })
    return event
}
