import express from 'express';
import profile from './profile.controller';

const router = express.Router();
router.post('/', profile.handleAdmission);

export default router;
