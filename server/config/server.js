/* Server configurations */
const getServerDetails = (httpPort, httpsPort, ip) => ({
  httpPort: process.env.HTTP_PORT || httpPort,
  httpsPort: process.env.HTTPS_PORT || httpsPort,
  ip: process.env.IP || ip,
});

export default {
  development: getServerDetails('8000', '8443', 'localhost'),
  production: getServerDetails('80', '443', ''),
};
