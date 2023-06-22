import {check} from 'express-validator';

export const loginValidator = [
    check('email')
        .notEmpty()
        .withMessage('El email es requerido')
        .isEmail()
        .withMessage('El email no es válido'),
    check('password')
        .notEmpty()
        .withMessage('La contraseña es requerida')
        .isLength({min: 8})
        .withMessage('La contraseña debe tener al menos 8 caracteres'),
]