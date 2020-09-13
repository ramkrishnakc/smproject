import app from './app';
import express from './express_config';
import LoggerClass from './logger';
import server from './server';
import encryption from './encryption';

const logger = new LoggerClass({logDirectory: app.logDirectory});

export default {
  app,
  encryption: encryption(logger),
  express,
  logger,
  server,
};
