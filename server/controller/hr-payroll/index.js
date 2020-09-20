import express from 'express';
import hr from './hr.controller';
import payroll from './payroll.controller';

const router = express.Router();
router.post('/', hr.handleAdmission);
router.get('/', payroll.handleAdmission);

export default router;
