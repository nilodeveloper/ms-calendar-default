import express from 'express'
import * as findMonth from '../controllers/findMonth.controller'
import 'dotenv/config'

export const findMonthRoute = express()

findMonthRoute.get('/find/month/:id', async (req, res) => {
    try{
        const result = await findMonth.run(Number(req.params.id))
        res.status(result.statusCode).json(result)
    }catch(e){
        res.status(500).json(e)
    }
});
