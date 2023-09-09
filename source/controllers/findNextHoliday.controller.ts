import * as service from '../services/findNextHoliday.service'
export async function run(body: any) {
    try {
        const result = await service.run(body);
        return result;
    } catch (e) {
        return {
            message: e,
            statusCode: 500
        }
    }
}
