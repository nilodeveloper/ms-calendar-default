import * as service from '../services/findMonth.service'
export async function run(month: Number) {
    try {
        const result = await service.run(month);
        return result;
    } catch (e) {
        return {
            message: e,
            statusCode: 500
        }
    }
}
