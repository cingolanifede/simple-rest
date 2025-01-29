import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';

export const validateTask = [
    body('title').trim().notEmpty().withMessage('Title is required').escape(),
    body('completed').isBoolean().withMessage('Completed must be a boolean'),
    // Custom validation middleware to check for errors
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() });
        }
        next();
    }
];