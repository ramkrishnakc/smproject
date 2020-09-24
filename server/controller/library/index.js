import express from 'express';
import library from './library.controller';

const router = express.Router();
router.get('/', library.getBookslist);
router.post('/', library.addBook);
router.put('/', library.editBookById);
router.get('/:id', library.getBookById);
router.delete('/:id', library.deleteBookById);
/* For book records */
router.post('/get_record', library.getRecords);
router.post('/update_record', library.editRecords);

export default router;
