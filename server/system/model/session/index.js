import session from './session';

export default {
  get: session.read,
  post: session.create,
  delete: session.remove,
  put: session.update,
};
