/* This initialize function sets 'appObjectStore' object with 'db' as empty array */
const initialize = () => {
  if (!global.appObjectStore) {
    global.appObjectStore = {
      db: [],
    };
  }
};

export default initialize();
