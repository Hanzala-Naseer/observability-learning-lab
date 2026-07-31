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





const memoryUsageBytes = new client.Gauge({
  name: "nodejs_memory_usage_bytes",
  help: "Current Node.js memory usage in bytes",
  collect() {
    this.set(process.memoryUsage().heapUsed);
  },
});
module.exports = {
    register: client.register,
    httpRequestsTotal,
    activeRequests,
    memoryUsageBytes,
    memoryUsageBytes
};