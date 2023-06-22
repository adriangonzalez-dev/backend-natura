import { Router } from 'express'
import { createCategory,deleteCategory,getAllCategories,getCategoryById,updateCategory } from './categories.controller'
import { createValidator } from './validations/createValidator';
import { getErrors } from '../../middlewares/getErrors';
import { idValidator } from '../../validations/idValidator';
import { updateValidator } from './validations/updateValidator';

const router:Router = Router();

router
.get('/', getAllCategories)
.get('/:id', idValidator, getErrors, getCategoryById)
.post('/', createValidator, getErrors ,createCategory)
.put('/:id',idValidator, updateValidator, getErrors, updateCategory)
.delete('/:id', idValidator, getErrors, deleteCategory);

export default router