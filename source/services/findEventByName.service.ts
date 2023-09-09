import * as repository from '../repository/findEventByName.repository'
export async function run(eventName: string) {
    try {
        return {
            message: `findEventByName here! ${eventName}`,
            statusCode: 200
        }
    } catch (e) {
        return {
            message: e,
            statusCode: 500
        }
    }
}
