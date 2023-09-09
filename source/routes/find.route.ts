import express from 'express'
import * as controller from '../controllers/find.controller'
import 'dotenv/config'

export const findRoute = express()

// Feriados no mês
findRoute.get('/find/holidays/:month', async (req, res) => {
    try{
        const result = await controller.run(Number(req.params.month))
        res.status(result.statusCode).json(result)
    }catch(e){
        res.status(500).json(e)
    }
});
