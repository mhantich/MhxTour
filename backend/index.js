import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRoutes from './router/tour.js'
import userRoutes from './router/user.js'
import authRoutes from './router/auth.js'
import boookingRouts from './router/Bookingsystem.js'


dotenv.config()
const app = express()
const corsOptions={
    origin:true,
    credentials: true
}



// database contect 
const connect = async ()=>{
try {
    const Contected = await mongoose.connect(process.env.MONGOOSE_URL) 
    console.log('hello ')
    
} catch (error) {
    console.log(error)
    
}
}




// middle wear 
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/api/v1/tours',tourRoutes)
app.use('/api/v1/users',userRoutes)
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/bookings',boookingRouts)



app.listen(process.env.PORT ,()=>{
    connect()
    
})