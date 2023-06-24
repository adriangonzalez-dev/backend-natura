import { Router } from 'express'
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from './products.controller'
import { createValidator } from './validations/createValidator';
import { getErrors } from '../../middlewares/getErrors';
import { idValidator } from '../../validations/idValidator';
import { updateValidator } from './validations/updateValidator';

const router:Router = Router();

router
.get('/', getAllProducts)
.get('/:id', idValidator, getErrors, getProductById)
.post('/', createValidator, getErrors ,createProduct)
.put('/:id',idValidator, updateValidator, getErrors, updateProduct)
.delete('/:id', idValidator, getErrors, deleteProduct);

export default router