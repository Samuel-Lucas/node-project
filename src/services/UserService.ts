import { AppDataSource } from "../database"
import { User } from "../entities/User"
import { UserRepository } from "../repositories/UserRepository"
import jwt from 'jsonwebtoken'

export class UserService {

    private userRepository: UserRepository

    constructor(userRepository = new UserRepository(AppDataSource.manager)) {
        {
            this.userRepository = userRepository
        }
    }
    
    getAllUsers = () => {
        return 
    }

    getAuthenticatedUser = async (email: string, password: string): Promise<User | null> => {
        return await this.userRepository.getUserByEmailAndPassword(email, password)
    }

    getToken = async (email: string, password: string): Promise<string> => {
        
        const user = await this.getAuthenticatedUser(email, password)

        if (!user) {
            throw new Error('Email/password invalid !')
        }

        const tokenData = {
            name: user?.name,
            email: user?.email
        }

        const tokenKey = '123456789'

        const tokenOptions = {
            subject: user?.id_user
        }

        const token = jwt.sign(tokenData, tokenKey, tokenOptions)

        return token
    }

    getUser = async (userId: string): Promise<User | null> => {
        return await this.userRepository.getUser(userId)
    }

    createUser = (name: string, email: string, password: string): Promise<User> => {
        const user = new User(name, email, password)
        return this.userRepository.createUser(user)
    }

    removeUser = (name: string | undefined) => {

    }
}