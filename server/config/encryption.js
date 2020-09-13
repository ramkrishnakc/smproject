const apiSecret =
  'secret1FFA752Iam77-6not726FA7-77so12A258-5A8Asecret57-DEE79tokenF9E0C' +
  '-8E9can7BBu-D1089hack9A4me-D5damn-19tryit48027Bitch';
const pwdSecret =
  'constapiSecret=decipher.-createCipher-7et5decipher.7-algorithm' +
  '-ryit48027crypted-pwdSecretconstencrypt=constdecrypt=';
const algorithm = 'aes-256-cbc';

const encryption = (logger) => {
  let crypto;
  try {
    crypto = require('crypto'); // eslint-disable-line global-require
  } catch (err) {
    logger.error('Crypto is not supported - upgrade node.js version.');
  }

  return {
    encrypt: (text) => {
      const cipher = crypto.createCipher(algorithm, pwdSecret);
      let crypted = cipher.update(text, 'utf-8', 'hex');
      crypted += cipher.final('hex');
      return crypted;
    },
    decrypt: (text) => {
      const decipher = crypto.createDecipher(algorithm, pwdSecret);
      let dec = decipher.update(text, 'hex', 'utf8');
      dec += decipher.final('utf-8');
      return dec;
    },
    apiSecret,
  };
};
export default encryption;
