const { 
    httpRequestsTotal,
    activeRequests,
    failedRequestsTotal,
    httpRequestDurationSeconds
} = require("../config/metrics");

const metricsMiddleware = (req, res, next) => {

    if (req.path === "/metrics") {
    return next();
  } 
  activeRequests.inc();

  const endTimer = httpRequestDurationSeconds.startTimer();

res.on("finish", () => {
  activeRequests.dec();

  httpRequestsTotal.inc({
    method: req.method,
    route: req.route?.path || req.path,
    status_code: String(res.statusCode),
  });

  if (res.statusCode >= 400) {

    failedRequestsTotal.inc({
      method: req.method,
      route: req.route?.path || req.path,
      status_code: String(res.statusCode),
    });
  }

  endTimer({
    method: req.method,
    route: req.route?.path || req.path,
    status_code: String(res.statusCode),
  });
});

next();
};

module.exports = metricsMiddleware;