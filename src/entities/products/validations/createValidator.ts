import { check } from 'express-validator'
export const createValidator = [
    check('title', 'El titulo es obligatorio').notEmpty().isString(),
    check('description', 'La descripcion es obligatoria').notEmpty().isString(),
    check('price', 'El precio es obligatorio').notEmpty().isNumeric(),
    check('stock', 'El stock es obligatorio').notEmpty().isNumeric(),
    check('category', 'La categoria es obligatoria').notEmpty().isString().isUUID(),
]