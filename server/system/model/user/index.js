import db from '../../db';
import helperFunction from '../helper';

const UserModel = db.getModel('User');
const Lib = helperFunction(UserModel);

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
