import express from 'express'
import  getImage from '../controllers/image_controller'

const routes: express.Router = express.Router()


routes.get('/', getImage)


export default routes