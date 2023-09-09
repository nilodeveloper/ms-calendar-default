import * as repository from '../repository/createEvent.repository'
import { onlyAdmCreate } from '../business/event/onlyAdmCreate.business'
import { onlyOneEventPerTime } from '../business/event/onlyOneEventPerTime.business'
import createEventSuccess from '../responses/createEvent.success'

export async function run(event: Event) {
    try {
        await validate(event)
        const event_ = await repository.createEvent(event)
        return createEventSuccess(event)
    } catch (e) {
        return {
            data: e.data || {},
            message: e.message || "Houve um problema no servidor. Entre em contato com o administrador",
            statusCode: e.statusCode || 500
        }
    }
}

const validate = async (event: Event) =>{
    await onlyAdmCreate(event)
    await onlyOneEventPerTime(event)
}
