import { body } from 'express-validator';

export const validateForm = [
    body('fullName')
        .notEmpty()
        .withMessage('Full name is required')
        .trim()
        .isLength({ max: 100 })
        .withMessage('Full name must be less than 100 characters'),
    body('email')
        .isEmail()
        .withMessage('Invalid email format')
        .normalizeEmail(),
];