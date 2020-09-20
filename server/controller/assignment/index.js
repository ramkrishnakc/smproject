import express from 'express';
import assignment from './assignment.controller';

const router = express.Router();
router.post('/', assignment.handleAdmission);

export default router;
