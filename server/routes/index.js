import config from '../config';
import admission from '../controller/admission';
import assignment from '../controller/assignment';
import attendance from '../controller/attendance-leave';
import calendar from '../controller/calendar';
import fee from '../controller/fee';
import homework from '../controller/homework';
import hrPayroll from '../controller/hr-payroll';
import library from '../controller/library';
import login from '../controller/login';
import notice from '../controller/notice';
import profile from '../controller/profile';
import user from '../controller/user';

const {
  logger,
  app: {indexHtmlPath},
} = config;

const routes = (app) => {
  // Register all the routes
  app.use('/smapi/admission', admission);
  app.use('/smapi/assignment', assignment);
  app.use('/smapi/attendance', attendance);
  app.use('/smapi/calendar', calendar);
  app.use('/smapi/fee', fee);
  app.use('/smapi/homework', homework);
  app.use('/smapi/hrPayroll', hrPayroll);
  app.use('/smapi/library', library);
  app.use('/smapi/login', login);
  app.use('/smapi/notice', notice);
  app.use('/smapi/profile', profile);
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
  app.get('*', (req, res) => res.sendFile(indexHtmlPath));
};

export default routes;
