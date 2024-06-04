import express from 'express'
import searchController from '../app/controllers/search.controller.js'

const route = express.Router();

route.get('/',searchController.index)

export default route;