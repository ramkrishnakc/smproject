import express from 'express';
import admission from './admission.controller';

const router = express.Router();
router.post('/', admission.handleAdmission);

export default router;
