import user from './user';

export default {
  get: user.read,
  post: user.create,
  delete: user.remove,
  put: user.update,
};
