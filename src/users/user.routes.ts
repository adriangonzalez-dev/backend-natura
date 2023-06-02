import { Router } from 'express'
import {getAllUsers,getUserById,createUser,deleteUser,updateUser} from './user.controller'
import { createValidator } from './validations/createValidator';
import { getErrors } from '../middlewares/getErrors';

const router:Router = Router();

router
.get('/', getAllUsers)
.get('/:id', getUserById)
.post('/', createValidator, getErrors ,createUser)
.put('/:id', getUserById)
.delete('/:id', deleteUser);

export default router