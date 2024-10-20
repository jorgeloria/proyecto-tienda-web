import express from 'express'
import { testFunction, doLogin } from '../controllers/LoginController.js'

const LoginRouter = express.Router()

LoginRouter.route('/').get(testFunction)

LoginRouter.route('/').post(doLogin)

export default LoginRouter;