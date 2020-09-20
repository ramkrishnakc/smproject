import express from 'express';
import leave from './leave.controller';
import attendance from './attendance.controller';

const router = express.Router();
router.post('/', leave.handleAdmission);
router.get('/', attendance.handleAdmission);

export default router;
