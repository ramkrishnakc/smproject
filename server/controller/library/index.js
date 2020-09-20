import express from 'express';
import library from './library.controller';

const router = express.Router();
router.post('/', library.handleAdmission);

export default router;
