import express from 'express';
import userController from './user.controller';

const router = express.Router();
router.post('/', userController.createUser);
router.put('/', userController.updateUser);
router.delete('/', userController.removeUser);

export default router;
