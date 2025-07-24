import { Router } from 'express';
import { submitForm, getFormEntries } from '../controllers/formController';
import { validateForm } from '../middleware/validateForm';

const router = Router();

router.post('/api/form', validateForm, submitForm);
router.get('/api/form', getFormEntries);

export default router;