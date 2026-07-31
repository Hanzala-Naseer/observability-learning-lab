const client = require("prom-client");

client.collectDefaultMetrics();

const httpRequestsTotal = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status_code"],
});

const activeRequests = new client.Gauge({
  name: "active_requests",
  help: "Number of active HTTP requests",
});


const failedRequestsTotal = new client.Counter({
  name: "failed_requests_total",
  help: "Total number of failed HTTP requests",
  labelNames: ["method", "route", "status_code"],
});


const memoryUsageBytes = new client.Gauge({
  name: "nodejs_memory_usage_bytes",
  help: "Current Node.js memory usage in bytes",
  collect() {
    this.set(process.memoryUsage().heapUsed);
  },
});

const httpRequestDurationSeconds = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "Duration of HTTP requests in seconds",
  labelNames: ["method", "route", "status_code"],
  buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.3, 0.5, 1, 2, 5],
});

module.exports = {
    register: client.register,
    httpRequestsTotal,
    activeRequests,
    memoryUsageBytes,
    memoryUsageBytes,
    failedRequestsTotal,
    httpRequestDurationSeconds
};