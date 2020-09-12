import config from '../config';
import login from '../controller/login';
import user from '../controller/user';

const {
  logger,
  app: {indexHtmlPath},
} = config;

const routes = (app) => {
  // Routes for each pages
  app.use('/smapi/login', login);
  app.use('/smapi/user', user);

  app.use((req, res, next) => {
    logger.info(
      'HOST :: ',
      req.headers.host,
      ' URL :: ',
      req.url,
      'Is request secure :::',
      req.secure
    );
    return next();
    // return req.secure ? next() : res.redirect('https://' + req.headers.host + req.url);
  });

  // default page
  app.get('*', (req, res) => {
    res.sendFile(indexHtmlPath);
  });
};

export default routes;
