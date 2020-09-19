import {sendSuccessResponse, sendErrorResponse} from '../helper';
import config from '../../config';
import {getUser} from '../user/user.controller';
import Session from '../../model/session';

const {
  encryption: {encrypt},
} = config;

/* Create the session */
const createSession = (id, role) =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    return Session.post({
      data: {
        s_userID: id,
        s_issuedDate: now,
        s_lastRequest: now,
        s_role: role,
      },
    })
      .then((result) => resolve(result && result._id))
      .catch((err) => reject(err));
  });

const loginSuccess = (req, res, data, sessId) => {
  req.session.userID = data.username;
  req.session.sessionID = sessId;
  req.session.role = data.role;
  return sendSuccessResponse(
    res,
    data,
    `User: ${data.username}, role: ${data.role} has logged in successfully`
  );
};

/* Login function */
const login = (req, res) => {
  const {username, password} = req.body;
  if (username && password) {
    return getUser({s_username: username})
      .then(async (user) => {
        if (user) {
          if (user.s_password === encrypt(password)) {
            const data = {
              username,
              role: user.s_role,
              id: user._id,
            };

            const sessionData = await Session.getOne({
              query: {s_userID: username},
            });

            // Session exists in DB
            if (sessionData) {
              return loginSuccess(req, res, data, sessionData._id);
            }

            // Create the session in DB
            return createSession(username, user.s_role)
              .then((sessionID) => {
                if (sessionID) {
                  return loginSuccess(req, res, data, sessionID);
                }
                return sendErrorResponse({
                  res,
                  logMsg: `Couldn't create session for ${username}`,
                });
              })
              .catch((err) =>
                sendErrorResponse({
                  res,
                  logMsg: `Couldn't create session for ${username} : ${err}`,
                })
              );
          }
          return sendErrorResponse({
            res,
            code: 400,
            message: 'Wrong username or password',
            logMsg: `User: ${username} sent wrong password`,
          });
        }
        return sendErrorResponse({
          res,
          code: 400,
          message: 'Wrong username or password',
          logMsg: `User: ${username} does not exist`,
        });
      })
      .catch((err) => sendErrorResponse({res, logMsg: err}));
  }
  return sendErrorResponse({
    res,
    code: 400,
    message: 'Bad Parameters',
    logMsg: 'Missing username or password',
  });
};

export default {
  login,
};
