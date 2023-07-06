import { Router } from 'express'
import {getAllUsers,getUserById,createUser,deleteUser,updateUser} from './user.controller'
import { createValidator } from './validations/createValidator';
import { updateValidator } from './validations/updateValidator';
import { getErrors, isAdmin, isLogged } from '../../middlewares';
import { idValidator } from '../../validations/idValidator';

const router:Router = Router();

router
.get('/', isLogged, isAdmin, getAllUsers)
.get('/:id', idValidator, updateValidator,isLogged, isAdmin, getErrors, getUserById)
.post('/', createValidator, isLogged, isAdmin, getErrors, createUser)
.put('/:id', idValidator, isLogged, isAdmin, getErrors, updateUser)
.delete('/:id', idValidator, isLogged, isAdmin, getErrors, deleteUser);

export default router