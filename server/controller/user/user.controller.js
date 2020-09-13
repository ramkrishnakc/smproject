import UserModel from '../../model/user';
import {sendSuccessResponse, sendErrorResponse} from '../helper';
import config from '../../config';

const {
  encryption: {encrypt},
} = config;

/* Get the user */
export const getUser = (query) => UserModel.getOne({query});

/* Create new user for the application */
const createUser = (req, res) => {
  const {username, password, role} = req.body;

  if (username && password && role) {
    return UserModel.post({
      data: {
        s_username: username,
        s_password: encrypt(password),
        s_role: role,
      },
    })
      .then(() =>
        sendSuccessResponse(
          res,
          '',
          `User: ${username} with role: ${role} is successfully created`
        )
      )
      .catch((err) => sendErrorResponse({res, logMsg: err}));
  }
  return sendErrorResponse({
    res,
    code: 400,
    message: 'Bad Parameters',
    logMsg: 'Missing username or password or role in paylaod',
  });
};

/* Update the user role or password */
const updateUser = (req, res) => sendSuccessResponse(res);

/* Remove the user from the application */
const removeUser = (req, res) => sendSuccessResponse(res);

export default {
  createUser,
  updateUser,
  removeUser,
};
