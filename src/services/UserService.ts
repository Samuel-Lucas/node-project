import { AppDataSource } from "../database"
import { User } from "../entities/User"
import { UserRepository } from "../repositories/userRepository"

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

    createUser = (name: string, email: string, password: string): Promise<User> => {
        const user = new User(name, email, password)
        return this.userRepository.createUser(user)
    }

    removeUser = (name: string | undefined) => {

    }
}