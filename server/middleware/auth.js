import Mongoose from 'mongoose';
import Model from '../model';
import config from '../config';
import {sendSuccessResponse, sendErrorResponse} from '../controller/helper';

const Session = Model.session;
const {logger} = config;
const {ObjectId} = Mongoose.Types;

/* eslint-disable promise/no-callback-in-promise */
const useAuth = (app) => {
  /* Check session for every request */
  app.use((req, res, next) => {
    logger.info('req.session :: ', req.session);
    if (req.session && req.session.userID) {
      const query = {_id: new ObjectId(req.session.sessionID)};
      return Session.getOne({query})
        .then((result) => {
          if (!result) {
            delete req.body.username;
            delete req.session.userID;
            delete req.session.sessionID;
            delete req.session.role;
            return null;
          }

          const now = Date.now();
          const expirationTime = 60 * 60 * 1000;

          /* Session has not expired - update lastRequest time */
          if (expirationTime >= now - result.s_lastRequest) {
            req.userID = result.s_userID;

            return Session.put({
              query,
              data: {
                s_lastRequest: now,
              },
            })
              .then(() => next())
              .catch((err) => {
                logger.error('Error while updating Session in DB.');
                logger.error(err);
                return next();
              });
          }

          /* Session has expired - destroy the session */
          delete req.body.username;
          delete req.session.userID;
          delete req.session.sessionID;
          delete req.session.role;
          req.session.destroy();

          return Session.delete({query})
            .then(() => next())
            .catch((err) => {
              logger.error('Error while deleting Session from DB.');
              logger.error(err);
              return next();
            });
        })
        .catch((err) => {
          logger.error('Error while getting Session info from DB.');
          logger.error(err);
          return next();
        });
    }
    return next();
  });

  /* Check if session is valid */
  app.get('/smapi/checkSession', (req, res) => {
    if (req.session && req.session.userID) {
      return Session.getOne({query: {_id: new ObjectId(req.session.sessionID)}})
        .then((session) => {
          if (session) {
            return sendSuccessResponse(res, {
              isValid: true,
            });
          }
          return sendErrorResponse({
            res,
            code: 401,
            logMsg: "checkSession: Session doesn't exist in DB",
          });
        })
        .catch(() =>
          sendErrorResponse({
            res,
            logMsg: "checkSession: Couldn't get Session From DB",
          })
        );
    }
    return sendErrorResponse({
      res,
      code: 401,
      logMsg: 'checkSession: Invalid Session',
    });
  });

  /* Destroy the session */
  app.get('/smapi/destroySession', (req, res) => {
    logger.info('Deleting ', req.session.sessionID);
    /* Destroy the session from DB */
    Session.delete({query: {_id: new ObjectId(req.session.sessionID)}})
      .then(() => null)
      .catch((err) => {
        logger.error('Error while deleting user session');
        logger.error(err);
      });
    /* Destroy the session from Server */
    req.session.destroy();
    return sendSuccessResponse(res);
  });
};

export default useAuth;
