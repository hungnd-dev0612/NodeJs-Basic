import express from 'express';
import NewsController from '../app/controllers/NewsController.js'

const router = express.Router();

router.get('/',NewsController.index);

export default router


