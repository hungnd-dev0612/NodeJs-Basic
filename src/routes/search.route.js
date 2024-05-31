import express from 'express'
import Search from '../app/controllers/search.controller.js'

const route = express.Router();

route.get('/',Search.index)

export default route;