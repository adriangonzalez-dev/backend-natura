import {check} from 'express-validator'

export const idValidator = [
    check('id')
    .notEmpty()
    .withMessage('El id es requerido')
    .isUUID()
    .withMessage('No es un id valido')
]