import * as service from '../services/find.service'
export async function run(month: number) {
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
