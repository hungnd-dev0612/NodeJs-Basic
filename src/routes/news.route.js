import express from 'express';
import newsController from '../app/controllers/news.controller.js'

const router = express.Router();

router.get('/',newsController.index);
export default router


