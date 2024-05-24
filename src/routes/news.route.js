import express from 'express';
import NewsController from '../app/controllers/NewsController.js'

const router = express.Router();



// function handleIndex(req,res){
//     const newsController = new NewsController();
//     newsController.index(req,res);
// }

router.get('/',NewsController.index);
export default router


