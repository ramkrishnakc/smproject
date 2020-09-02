import path from 'path';

const rootPath = path.normalize(`${__dirname}/../../`);
const publicPath = path.resolve(rootPath, 'static');
const serverPath = path.resolve(rootPath, 'server');
const indexHtmlPath = path.resolve(rootPath, 'client', 'index.html');

// const indexHtmlPath = path.resolve(rootPath, 'static', 'index.html');
const certDirectory = process.env.CERTIFICATE_LOCATION || path.resolve(serverPath, 'certs');
const logDirectory = process.env.LOGFILE_LOCATION || path.resolve(rootPath, 'logs');
const schemaDirectory = path.resolve(serverPath, 'schema');
const dbName = 'schoolManagement';

export default {
  rootPath,
  publicPath,
  indexHtmlPath,
  certDirectory,
  logDirectory,
  schemaDirectory,
  dbName,
};
