import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import postRoutes from './routes/postRoutes.js'

const app = express()
dotenv.config()

app.use(cors({
    origin: ['http://localhost:3000', "https://video-tv.vercel.app"],
    credentials: true,
}));

app.use(bodyParser.json())

app.use('/videos', postRoutes)

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => app.listen(process.env.PORT, () => console.log(`Server is live at http://localhost:${process.env.PORT}`)))

export default app