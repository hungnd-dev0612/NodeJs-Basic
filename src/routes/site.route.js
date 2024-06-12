import express from 'express';
import siteController from '../app/controllers/site.controller.js'

const route = express.Router();

route.get('/', siteController.index);

export default route;