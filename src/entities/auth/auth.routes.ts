import { Router } from 'express';
import { loginUser, registerUser } from './auth.controller';
import { loginValidator } from './validations/loginValidations';
import { getErrors } from '../../middlewares/getErrors';
import { registerValidator } from './validations/registerValidation';

const router:Router = Router();

router
.post('/login', loginValidator, getErrors, loginUser)
.post('/register', registerValidator , getErrors, registerUser)

export default router