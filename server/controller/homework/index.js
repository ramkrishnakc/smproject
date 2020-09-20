import express from 'express';
import homework from './homework.controller';

const router = express.Router();
router.post('/', homework.handleAdmission);

export default router;
