import  express  from "express";
import dotenv from "dotenv";
import connectdb from "./database/conn.js";
import cors from 'cors'
import route from './router/route.js' 
import jobRoute from './router/jobRoute.js'
import errorMiddleware from './middleware/errorMiddleware.js';
import authroute from './router/autoRoute.js'


const app = express()

dotenv.config()

 //middleware
 app.use(express.json())
 app.use(cors())
 app.use("/",route)
 app.use("/api",authroute)
 app.use("/api",jobRoute)

 app.use(errorMiddleware)


 //mongodb coonection
connectdb()

//port
const port = process.env.port || 3000

app.listen(port,()=>{
    console.log(`Darshan ${port}`)
})


