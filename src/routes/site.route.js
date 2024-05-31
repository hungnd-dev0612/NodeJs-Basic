import express from 'express';
import Site from '../app/controllers/site.controller.js'

const route = express.Router();

route.get('/',Site.index);

export default route;