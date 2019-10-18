import { Router } from 'express'
import userController from '../controllers/users'

const router: Router = Router()

router.post('/register', userController.createUser)
router.post('/authenticate', userController.authenticateUser)

export default router
