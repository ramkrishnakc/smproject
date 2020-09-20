import express from 'express';
import calendar from './calendar.controller';

const router = express.Router();
router.post('/', calendar.handleAdmission);

export default router;
