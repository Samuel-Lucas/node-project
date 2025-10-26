import { UserService } from "./UserService"

describe("UserService", () => {
    const userService = new UserService()

    it("Deve adicionar novo usuário", () => {
        const mockConsole = jest.spyOn(global.console, "log")
        userService.createUser("Samuel", "samuel@dio.com")
        expect(mockConsole).toHaveBeenCalled()
    })
})