import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

// catch token from client to pass the data of token for access req and db things

const auth = async (req, res, next) => { //validating token
    try {
        const token = req.headers.authorization.split(' ')[1] // [0] = Bearer, [1] = token
        const  isCustomAuth = token.length < 500 // if less than 500 char its mean custom token , then if more than 500 its mean googleauth

        let decodedToken

        if(token && isCustomAuth){ // if sign in with custom auth
            decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)

            req.userId = decodedToken?.id
        }else{ // if auth with googleOauth
            decodedToken = jwt.decode(token)
            console.log(decodedToken)
            req.userId = decodedToken.sub
        }

        next()

    } catch (error) {
        console.log(error)
    }
} 

export default auth