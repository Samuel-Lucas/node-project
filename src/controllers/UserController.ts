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

    getUser = async (request: Request, response: Response) => {
        const { userId } = request.params

        if (!userId) {
            return response.status(400).json({ error: 'userId is required' })
        }

        const user = await this.userService.getUser(userId)

        return response.status(200).json(user)
    }

    createUser = (request: Request, response: Response) => {
        const user = request.body

        if (!user.name) {
            return response.status(400).json({ message: "Bad request! name is required"})
        }

        if (!user.email) {
            return response.status(400).json({ message: "Bad request! email is required"})
        }

        this.userService.createUser(user.name, user.email, user.password)
        return response.status(201).json({ message: "Usuário criado"})
    }

    deleteUser = (request: Request, response: Response) => {

        const { name } = request.params;
        this.userService.removeUser(name)
        const users = this.userService.getAllUsers()
        return response.status(200).json(users)
    }
}