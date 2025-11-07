import { Router } from 'express'
import { UserController } from './controllers/UserController'

export const router = Router()

const userController = new UserController()

router.get('/user', userController.getUsers)
router.get('/user/:userId', userController.getUser)
router.post('/user', userController.createUser)
router.delete('/user/:name', userController.deleteUser)