import db from './db';
import config from '../config';

require('./global');

const {logger} = config;

/* Create default user for the application */
export const insertUser = () => {
  const User = require('./model/user').default; // eslint-disable-line global-require

  return User.getOne({
    query: {s_username: 'root_user'},
    select: 's_username s_password s_role s_createdDate _id',
  })
    .then((res) => {
      if (!res) {
        logger.info('Inserting root app user.');
        return User.post({
          data: {
            s_username: 'root_user',
            s_password: '58264aceec9c195ada654682ddc7d6c9', // changeme (1c4ac81abf5c31290db22e4c3b46ccd0 = doitnow*ucker)
            s_role: 'admin',
          },
        });
      }
      logger.info('Root app user already exist.');
      return null;
    })
    .catch(() => {
      logger.error('Error while getting root user');
      return null;
    });
};

/* Create the database */
const createDB = () =>
  new Promise((resolve, reject) =>
    db
      .create()
      .then(() => resolve())
      .catch((e) => reject(e))
  );
export default createDB;
