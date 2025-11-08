import type {Request, Response} from 'express'
import jwt from 'jsonwebtoken'

const user = {
    id_user: '12345',
    name: 'Samuel',
    email: 'samuel@dio.com',
    password: '123456'
}

export class LoginController {
    
    login = async (request: Request, response: Response) => {

        const tokenData = {
            name: user.name,
            email: user.email
        }

        const tokenKey = '123456789'

        const tokenOptions = {
            subject: user.id_user
        }

        const token = jwt.sign(tokenData, tokenKey, tokenOptions)

        return response.status(200).json({ token })
    }
}