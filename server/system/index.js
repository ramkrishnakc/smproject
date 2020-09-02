require('./global');

import db from './db';

/* Create the database */
const createDB = () =>
  new Promise((resolve, reject) =>
    db.create()
      .then(() => resolve())
      .catch(e => reject(e))
  );
export default createDB;
