import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

import userModel from '../models/userModel.js'

dotenv.config()

export const signin = async (req, res) => {
    const { email, password } = req.body

    try {
        const existingUser = await userModel.findOne({email}) // find one data by email 
        
        if(!existingUser) return res.status(404).json({ message : "user doesn't exist" }) // checking existing data

        const isPwdCorrect = await bcrypt.compare(password, existingUser.password) // comparing user password by bcrypt the password 

        if(!isPwdCorrect) return res.status(404).json({ message : 'Invalid credentials' }) // checking if password is not same 

        const token = jwt.sign({ email : existingUser.email, id : existingUser._id }, process.env.JWT_SECRET_KEY, { expiresIn : '1h' })

        res.status(200).json({ result : existingUser, token })

    } catch (error) {
        res.status(500).json({ message : 'Something error is happened from db' })
    }
}

export const signup = async (req, res) => {
    const { email, password, firstName, lastName } = req.body

    try {
        const existingUser = await userModel.findOne({ email }) // find one data by email

        if(existingUser) return res.status(400).json({ message : 'User or Email is already exist.' }) // checking existing data

        const hashedPassword = await bcrypt.hash(password, 12) // hashing the password 

        const result = await userModel.create({ email, password : hashedPassword, name : `${firstName} ${lastName}` })  // create and store data user to db

        const token = jwt.sign({ email : result.email, id : result._id }, process.env.JWT_SECRET_KEY , { expiresIn : '1h' }) // create a token to store 

        res.status(200).json({ result, token })

    } catch (error) {
        res.status(500).json({ message : 'Something is wrong' })
    }
}
