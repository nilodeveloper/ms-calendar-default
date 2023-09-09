import express from 'express'
import * as findEventByName from '../controllers/findEventByName.controller'
import 'dotenv/config'

export const findEventByNameRoute = express()

findEventByNameRoute.get('/find/event/name/:name', async (req, res) => {
    try{
        const result = await findEventByName.run(req.params.name)
        res.status(result.statusCode).json(result)
    }catch(e){
        res.status(500).json(e)
    }
});
