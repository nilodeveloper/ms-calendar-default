import express from 'express'
import * as findNextHoliday from '../controllers/findNextHoliday.controller'
import 'dotenv/config'

export const findNextHolidayRoute = express()

findNextHolidayRoute.get('/find/next/holiday', async (req, res) => {
    try{
        const result = await findNextHoliday.run(req.body)
        res.status(result.statusCode).json(result)
    }catch(e){
        res.status(500).json(e)
    }
});
