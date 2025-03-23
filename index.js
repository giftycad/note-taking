import express from 'express'
import { noteRouter } from './routes/note_route.js'
import 'dotenv/config'
import mongoose from 'mongoose'

const  connectionString = process.env.MONGO_URL
console.log(connectionString)

mongoose.connect(connectionString).then(() => {
    console.log('database connected')
}).catch((err) =>{
    console.log(err)
})

const app = express()

const port = 7079

app.use(express.json())

app.use('/api/v1', noteRouter)

app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`)
})