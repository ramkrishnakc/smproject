import db from '../../db';
import helperFunction from '../helper';

const Lib = helperFunction(db.getModel('User'));

export default {
  get: Lib.find,
  getOne: Lib.findOne,
  post: Lib.create,
  postMultiple: Lib.insert,
  delete: Lib.deleteOne,
  deleteMultiple: Lib.deleteMany,
  put: Lib.update,
  putMultiple: Lib.updateMany,
  upsert: Lib.upsert,
  upsertMultiple: Lib.upsertMultiple,
};
