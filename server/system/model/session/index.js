import db from '../../db';
import helperFunction from '../helper';

const Lib = helperFunction(db.getModel('Session'));

export default {
  getOne: Lib.findOne,
  post: Lib.create,
  delete: Lib.deleteOne,
  put: Lib.update,
};
