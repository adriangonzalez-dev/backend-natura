import { Router } from 'express'
import {getAllUsers,getUserById,createUser,deleteUser,updateUser} from './user.controller'
import { createValidator } from './validations/createValidator';
import { updateValidator } from './validations/updateValidator';
import { getErrors } from '../middlewares/getErrors';
import { idValidator } from '../validations/idValidator';

const router:Router = Router();

router
.get('/', getAllUsers)
.get('/:id', idValidator, updateValidator, getErrors, getUserById)
.post('/', createValidator, getErrors, createUser)
.put('/:id', idValidator, getErrors, updateUser)
.delete('/:id', idValidator, getErrors, deleteUser);

export default router