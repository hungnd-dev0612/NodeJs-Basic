import express from 'express';
import homeController from '../app/controllers/home.controller.js'

const route = express.Router();

route.get('/', homeController.index);

export default route;