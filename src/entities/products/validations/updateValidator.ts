import { check } from 'express-validator'

export const updateValidator = [
    check('title', 'El titulo debe ser de tipo string').optional().isString(),
    check('description', 'La descripcion debe ser de tipo string').optional().isString(),
    check('price', 'El precio debe ser de tipo number').optional().isNumeric(),
    check('stock', 'El stock debe ser de tipo number').optional().isNumeric(),
]