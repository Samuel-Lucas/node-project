import express from 'express'
import { UserController } from './controllers/UserController'

const server = express()
server.use(express.json())

const userController = new UserController()

server.get('/', userController.getUser)

server.post('/user', userController.createUser)

server.listen(5000, () => console.log("Server on !"))