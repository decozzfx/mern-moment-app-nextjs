import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const url = process.env.MONGODB_URL

const dbConnection = mongoose.connect(url,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(res => console.log('DB is connected'))
.catch(err => console.log('Could not connect to DB'))

export default dbConnection