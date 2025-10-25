import type {Request, Response} from 'express'

const db = [
    {
        name: "Samuel",
        email: "sam@dio.com"
    }
]

export class UserController {
    getUser = (request: Request, response: Response) => {
        return response.status(200).json(db)
    }

    createUser = (request: Request, response: Response) => {
        const user = request.body
        db.push(user)
        console.log(db)
        return response.status(201).json({ message: "Usuário criado"})
    }
}