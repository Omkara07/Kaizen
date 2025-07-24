import { Router } from 'express';
import { validateForm } from '../middleware/validateForm';
import { signIn, signUp } from '../controllers/authController';

const router = Router();

router.post('/api/auth', validateForm, signUp);
router.get('/api/auth', validateForm, signIn);

export default router;