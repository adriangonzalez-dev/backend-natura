import { Router } from 'express'
import { createRole,deleteRole,getAllRoles,getRoleById,updateRole } from './roles.controller'
import { createValidator } from './validations/createValidator';
import { getErrors, isAdmin, isLogged } from '../../middlewares';
import { idValidator } from '../../validations/idValidator';
import { updateValidator } from './validations/updateValidator';

const router:Router = Router();

router
.get('/', isLogged, isAdmin, getAllRoles)
.get('/:id', idValidator, isLogged, isAdmin, getErrors, getRoleById)
.post('/', createValidator, isLogged, isAdmin, getErrors ,createRole)
.put('/:id',idValidator, isLogged, isAdmin, updateValidator, getErrors, updateRole)
.delete('/:id', idValidator, isLogged, isAdmin, getErrors, deleteRole);

export default router