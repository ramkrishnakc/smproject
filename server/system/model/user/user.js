import db from '../../db'; 

const UserModel = db.getModel('User');

const read = () => { };

const create = params => new Promise((resolve, reject) =>
  UserModel
    .create(params.data)
    .then(res => resolve(res))
    .catch(err => reject(err)));

const remove = () => {};

const update = () => {};

export default {
  read,
  create,
  remove,
  update,
};
