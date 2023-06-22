import { check } from 'express-validator'

export const createValidator = [
    check('username','El nombre de usuario es requerido').notEmpty().isString(),
    check('email','El email es requerido').notEmpty().isEmail(),
    check('password','La contraseña es requerida').notEmpty().isString(),
]