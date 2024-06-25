import express from 'express';
import detailController from '../app/controllers/detail.controller.js';

const router = express.Router();

router.get('/', detailController.showDetail);
export default router


