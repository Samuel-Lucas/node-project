import type { EntityManager } from "typeorm";
import { AppDataSource } from "../database";
import type { User } from "../entities/User";

export class UserRepository {

    private manager: EntityManager

    constructor(manager = AppDataSource.manager) {
        this.manager = manager
    }

    createUser = async (user: User) => {
        return this.manager.save(user)
    }
}