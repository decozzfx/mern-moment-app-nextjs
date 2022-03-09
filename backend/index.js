import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'

import dbConnection from './config/db.js'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import bodyParser from "body-parser";

dotenv.config()
const app = express()
app.use(cors())

// DB Connection
dbConnection

//parser
app.use(bodyParser.json({ limit : "30mb", extended : true })) // allow to parsing json body from client to server

//routes
app.use('/posts', postRoutes)
app.use('/users', userRoutes)

app.use('/', (req, res) => {
    res.send('Hello, Welcome to Moment App API')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))