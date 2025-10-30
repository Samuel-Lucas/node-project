import { UserService, type User } from "./UserService"

describe("UserService", () => {
    const mockDb: User[] = []
    const userService = new UserService(mockDb)

    it("Deve adicionar novo usuário", () => {
        const mockConsole = jest.spyOn(global.console, "log")
        userService.createUser("Samuel", "samuel@dio.com")
        expect(mockConsole).toHaveBeenCalledWith("DB atualizado", mockDb)
    })
})