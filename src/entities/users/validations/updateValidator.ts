import {check} from 'express-validator';

export const updateValidator = [
    check('user')
        .isString()
        .withMessage('Debe ser un string'),
]