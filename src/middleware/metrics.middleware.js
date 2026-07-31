const { httpRequestsTotal } = require("../config/metrics");

const metricsMiddleware = (req, res, next) => {
  res.on("finish", () => {
    httpRequestsTotal.inc({
      method: req.method,
      route: req.route?.path || req.path,
      status_code: res.statusCode,
    });
  });

  next();
};

module.exports = metricsMiddleware;