import config from '../../config';

const {logger} = config;

export const getErrorObject = (code, message, logMsg) => {
  const errorObject = {success: false, message};
  // Log error if needed
  if (logMsg) {
    logger.error(logMsg);
  }

  if (message) {
    return errorObject;
  }

  switch (code) {
    case 400:
      errorObject.message = 'Bad request';
      break;
    case 401:
      errorObject.message = 'Unautorized request';
      break;
    case 403:
      errorObject.message = 'Forbidden request';
      break;
    case 404:
      errorObject.message = 'Request Not Found';
      break;
    case 412:
      errorObject.message = 'Precondition failed';
      break;
    case 415:
      errorObject.message = 'Unsupported Content-type';
      break;
    case 429:
      errorObject.message = 'Too many requests';
      break;
    default:
      errorObject.message = 'Internal server error';
  }
  return errorObject;
};

export const sendErrorResponse = ({res, code = 500, message, logMsg}) =>
  res.status(code).send(getErrorObject(code, message, logMsg));

export const sendSuccessResponse = (res, data, logMsg) => {
  const successObject = {success: true};
  if (data) {
    successObject.data = data;
  }
  // Log success message if needed
  if (logMsg) {
    logger.info(logMsg);
  }
  return res.status(200).send(successObject);
};
