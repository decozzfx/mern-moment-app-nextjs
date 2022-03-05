import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'

import dbConnection from './config/db.js'
import postRoutes from './routes/posts.js'

dotenv.config()
const app = express()
app.use(cors())

// DB Connection
dbConnection

//parser


//routes
app.use('/posts', postRoutes)

app.use('/', (req, res) => {
    res.send('Hello, Welcome to Moment App API')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))