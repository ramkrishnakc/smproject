import express from 'express';
import notice from './notice.controller';

const router = express.Router();
router.post('/', notice.handleAdmission);

export default router;
