import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import cors from 'cors';

const expressConfig = (app, config) => {
  app.use(cors());
  app.use(bodyParser.urlencoded({extended: true, limit: '10mb'}));
  app.use(bodyParser.json({limit: '10mb'}));
  app.use(express.static(config.publicPath));
  app.set('views', config.publicPath);
  app.set('html', ejs.renderFile);
  app.set('view engine', 'html');
};

export default expressConfig;
