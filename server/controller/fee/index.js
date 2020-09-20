import express from 'express';
import fee from './fee.controller';

const router = express.Router();
router.post('/', fee.handleAdmission);

export default router;
