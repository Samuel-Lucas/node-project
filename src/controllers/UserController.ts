import type {Request, Response} from 'express'
import { UserService } from '../services/UserService'

const userService = new UserService()

export class UserController {
    getUsers = (request: Request, response: Response) => {
        const users = userService.getAllUsers()
        return response.status(200).json(users)
    }

    createUser = (request: Request, response: Response) => {
        const user = request.body

        if (!user.name) {
            return response.status(400).json({ message: "Bad request! name is required"})
        }

        userService.createUser(user.name, user.email)
        return response.status(201).json({ message: "Usuário criado"})
    }
}