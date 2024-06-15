import express from 'express';
import productController from '../app/controllers/product.controller.js';

const router = express.Router();

router.get('/', productController.showDetail);
export default router


