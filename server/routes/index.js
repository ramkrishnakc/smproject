import config from '../config';
import login from '../controller/login';
import user from '../controller/user';

const { logger, app: { indexHtmlPath}} = config;

const routes = app => {
  // Routes for each pages 
  app.use('/smapi/login', login);
  app.use('/smapi/user', user);

  app.use((req, res, next) => {
    console.log("Is request secure :::", req.secure);
    console.log('HOST :: ', req.headers.host, ' URL :: ', req.url);
    return next();
    // return req.secure ? next() : res.redirect('https://' + req.headers.host + req.url);
  });
};

export default routes;