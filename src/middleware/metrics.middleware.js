const { httpRequestsTotal,activeRequests,failedRequestsTotal } = require("../config/metrics");

const metricsMiddleware = (req, res, next) => {

    if (req.path === "/metrics") {
    return next();
  } 
  activeRequests.inc();
  

  res.on("finish", () => {
    activeRequests.dec();
    httpRequestsTotal.inc({
      method: req.method,
      route: req.route?.path || req.path,
      status_code: res.statusCode,
    });

    if (res.statusCode >= 400) {
      console.log("Failed request:", res.statusCode);

  failedRequestsTotal.inc({
    method: req.method,
    route: req.route?.path || req.path,
    status_code: String(res.statusCode),
  });
} 
  });

  next();
};

module.exports = metricsMiddleware;