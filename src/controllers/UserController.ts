import type {Request, Response} from 'express'
import { UserService } from '../services/UserService'

const userService = new UserService()

export class UserController {
    
    userService: UserService

    constructor(userService = new UserService()) {
        this.userService = userService
    }

    getUsers = (request: Request, response: Response) => {
        const users = this.userService.getAllUsers()
        return response.status(200).json(users)
    }

    createUser = (request: Request, response: Response) => {
        const user = request.body

        if (!user.name) {
            return response.status(400).json({ message: "Bad request! name is required"})
        }

        this.userService.createUser(user.name, user.email)
        return response.status(201).json({ message: "Usuário criado"})
    }
}