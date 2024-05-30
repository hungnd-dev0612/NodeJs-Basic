import express from 'express'
import SearchController from '../app/controllers/SearchController.js'

const route = express.Router();

route.get('/',SearchController.index)

export default route;