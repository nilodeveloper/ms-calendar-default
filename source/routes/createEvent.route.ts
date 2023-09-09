import express from 'express'
import * as createEvent from '../controllers/createEvent.controller'
import 'dotenv/config'

export const createEventRoute = express()

createEventRoute.post('/create/event', async (req, res) => {
    try{
        const result = await createEvent.run(req.body)
        res.status(result.statusCode).json(result)
    }catch(e){
        res.status(500).json(e)
    }
});
