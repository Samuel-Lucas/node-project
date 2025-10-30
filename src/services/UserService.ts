export interface User {
    name: string,
    email: string
}

const db = [
    {
        name: "Samuel",
        email: "sam@dio.com"
    }
]

export class UserService {

    db: User[]

    constructor(database = db) {
        {
            this.db = database
        }
    }
    
    getAllUsers = () => {
        return this.db
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        this.db.push(user)
        console.log("DB atualizado", this.db)
    }
}