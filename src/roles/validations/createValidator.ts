import { check } from 'express-validator'

export const createValidator = [
    check('name','El nombre de usuario es requerido').notEmpty().isString(),
]