const db = [
    {
        name: "Samuel",
        email: "sam@dio.com"
    }
]

export class UserService {
    
    getAllUsers = () => {
        return db
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        db.push(user)
        console.log("DB atualizado", db)
    }
}