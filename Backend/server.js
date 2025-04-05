import express from 'express'
import { ENV_VARS } from './config/envVar.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { connectDB } from './config/connectDb.js'
import authRouter from './routes/auth.router.js'
import facultyRouter from './routes/faculty.router.js'
import adminRouter from './routes/admin.router.js'
const app=express()
app.use(cors())
app.use(cors({
    origin: '*', // Allow frontend URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/faculty',facultyRouter)
app.use('/api/v1/admin',adminRouter)

const port=ENV_VARS.PORT
app.listen(port,()=>{
    console.log('The server running at the port-->', port)
    connectDB()
})