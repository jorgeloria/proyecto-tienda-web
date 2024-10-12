import express from 'express'
import { testFunction } from '../controllers/testController.js'

const testRouter = express.Router()

testRouter.route('/test').get(testFunction)

export default testRouter;