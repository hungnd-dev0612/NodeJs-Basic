import express from 'express';
import infoController from '../app/controllers/info.controller.js';

const router = express.Router();

router.get('/:slug', infoController.showDetail);
export default router


