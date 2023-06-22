import { check } from 'express-validator'

export const updateValidator = [
    check('name','El nombre de usuario debe ser valido').isString(),
]