import { Router } from 'express'
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from './products.controller'
import { createValidator } from './validations/createValidator';
import { idValidator } from '../../validations/idValidator';
import { updateValidator } from './validations/updateValidator';
import { isAdmin, isLogged,getErrors } from '../../middlewares';

const router:Router = Router();

router
.get('/', getAllProducts)
.get('/:id', idValidator, getErrors, getProductById)
.post('/', createValidator, isLogged, isAdmin, getErrors ,createProduct)
.put('/:id',idValidator, updateValidator, isLogged, isAdmin, getErrors, updateProduct)
.delete('/:id', idValidator, isLogged, isAdmin, getErrors, deleteProduct);

export default router