import * as service from '../services/findEventByName.service'
export async function run(eventName: string) {
    try {
        const result = await service.run(eventName);
        return result;
    } catch (e) {
        return {
            message: e,
            statusCode: 500
        }
    }
}
