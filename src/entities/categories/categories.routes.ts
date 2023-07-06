import { Router } from 'express'
import { createCategory,deleteCategory,getAllCategories,getCategoryById,updateCategory } from './categories.controller'
import { createValidator } from './validations/createValidator';
import { getErrors } from '../../middlewares/getErrors';
import { idValidator } from '../../validations/idValidator';
import { updateValidator } from './validations/updateValidator';
import { isLogged, isAdmin } from '../../middlewares';

const router:Router = Router();

router
.get('/', getAllCategories)
.get('/:id', idValidator, isLogged, isAdmin, getErrors, getCategoryById)
.post('/', createValidator, isLogged, isAdmin, getErrors ,createCategory)
.put('/:id',idValidator, updateValidator, isLogged, isAdmin, getErrors, updateCategory)
.delete('/:id', idValidator, isLogged, isAdmin, getErrors, deleteCategory);

export default router