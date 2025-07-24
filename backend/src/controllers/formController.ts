import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { Form } from '../models/form';
import { FormData } from '../types/form';

export const submitForm = async (req: Request, res: Response): Promise<void> => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        const { fullName, email, message }: FormData = req.body;

        const existingEntry = await Form.findOne({ where: { email } });
        if (existingEntry) {
            res.status(400).json({ error: 'Email already exists' });
            return;
        }

        const formEntry = await Form.create({ fullName, email, message });

        res.status(201).json({
            message: 'Form submitted successfully',
            data: formEntry,
        });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getFormEntries = async (req: Request, res: Response): Promise<void> => {
    try {
        const entries = await Form.findAll();
        res.status(200).json(entries);
    } catch (error) {
        console.error('Error fetching form entries:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};