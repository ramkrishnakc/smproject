import app from './app';
import encryption from './encryption';
import express from './express_config';
import LoggerClass from './logger';
import server from './server';

const logger = new LoggerClass({logDirectory: app.logDirectory});

export default {
  app,
  encryption,
  express,
  logger,
  server,
};
