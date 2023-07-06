import { Router } from 'express'
import {createImageProduct,deleteImageProduct,updateImageProduct} from './files.controller'
import { getErrors, isAdmin, isLogged } from '../../middlewares';
import multer from '../../middlewares/multer'

const router:Router = Router();

router
.post('/', isLogged, isAdmin, multer.single('image') , getErrors, createImageProduct)
.put('/:id', isLogged, isAdmin, multer.single('image'), getErrors, updateImageProduct)
.delete('/:id', isLogged, isAdmin, getErrors, deleteImageProduct)

export default router