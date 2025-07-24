import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { Form } from '../models/form';
import { FormData } from '../types/form';
import { Auth } from '../models/auth';
import { SignInData, SignUpData } from '../types/auth';

export const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        const { fullName, email, password }: SignUpData = req.body;

        const existingEntry = await Auth.findOne({ where: { email } });
        if (existingEntry) {
            res.status(400).json({ error: 'Email already exists' });
            return;
        }

        const formEntry = await Auth.create({ fullName, email, password });

        res.status(201).json({
            message: 'Form submitted successfully',
            data: formEntry,
        });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
export const signIn = async (req: Request, res: Response): Promise<void> => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        const { email, password }: SignInData = req.body;

        const existingEntry = await Auth.findOne({ where: { email } });
        if (!existingEntry) {
            res.status(400).json({ error: 'User Not found' });
            return;
        }

        res.status(201).json({
            message: 'Form submitted successfully',
            data: existingEntry,
        });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getAuthEntries = async (req: Request, res: Response): Promise<void> => {
    try {
        const entries = await Auth.findAll();
        res.status(200).json(entries);
    } catch (error) {
        console.error('Error fetching form entries:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};