import { Router } from 'express'
import { createRole,deleteRole,getAllRoles,getRoleById,updateRole } from './roles.controller'
import { createValidator } from './validations/createValidator';
import { getErrors } from '../../middlewares/getErrors';
import { idValidator } from '../../validations/idValidator';
import { updateValidator } from './validations/updateValidator';

const router:Router = Router();

router
.get('/', getAllRoles)
.get('/:id', idValidator, getErrors, getRoleById)
.post('/', createValidator, getErrors ,createRole)
.put('/:id',idValidator, updateValidator, getErrors, updateRole)
.delete('/:id', idValidator, getErrors, deleteRole);

export default router