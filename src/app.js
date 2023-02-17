import 'dotenv/config.js';
import express from "express";
import cors from 'cors'
import { RouterProduct } from './routes/routes.js'

const AppInit = () =>{
    const app = express()
    console.log('app init');
    app.use(cors())
    app.use( RouterProduct )
    const port = process.env.HTTP_PORT || 3001;
    app.listen(port, () => console.log(`Rest ready to listen in port: ${port}`))
}
export { AppInit } ;


