import express from 'express';
import ProductController from './controllers/product.controller.js';
import uploadFile from '../../middleware/file.upload.js';


const router=express.Router()
const product= new ProductController();



router.get('/',product.getAllProducts)
router.post('/',uploadFile.single('imageURL'),product.addProducts)
router.get('/filter',product.filterProducts)
router.post('/rate',product.rateProducts)
router.get('/:id',product.getOneProduct)
export default router;