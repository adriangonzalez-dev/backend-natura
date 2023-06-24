import { Router } from 'express'
import {createImageProduct,deleteImageProduct,updateImageProduct} from './files.controller'
import { getErrors } from '../../middlewares';
import multer from '../../middlewares/multer'

const router:Router = Router();

router
.post('/', multer.single('image') , getErrors, createImageProduct)
.put('/:id', multer.single('image'), getErrors, updateImageProduct)
.delete('/:id', getErrors, deleteImageProduct)

export default router