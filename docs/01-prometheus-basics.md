# Phase 1 — Prometheus Fundamentals

## Objective

Set up Prometheus with a Node.js Express application and expose application metrics through a `/metrics` endpoint for monitoring.

---

## What I Learned

- Prometheus collects metrics by periodically scraping HTTP endpoints.
- Applications expose metrics using a `/metrics` endpoint.
- `prom-client` is the official Prometheus client library for Node.js.
- `collectDefaultMetrics()` automatically collects useful runtime metrics without additional configuration.

Default metrics include:

- CPU usage
- Memory usage
- Event loop delay
- Heap statistics
- Garbage collection metrics
- Process information

---

## Monitoring Flow

```text
Client Request
      │
      ▼
Express Application
      │
      ▼
/metrics Endpoint
      │
      ▼
Prometheus Scrapes Metrics
```

---

## Key Takeaways

- Prometheus follows a pull-based model by scraping metrics from applications.
- Metrics are stored as time-series data.
- Each metric should provide meaningful operational insight.
- Default metrics should be enabled before creating custom ones.

---

## Common Pitfalls

- Forgetting to expose the `/metrics` endpoint.
- Preventing Prometheus from accessing the metrics endpoint.
- Creating custom metrics when existing default metrics already provide the required information.
- Exposing metrics without verifying that Prometheus is successfully scraping them.

---

## Interview Notes

**Q: Why does Prometheus use a pull model instead of a push model?**

**A:**

- Simplifies service discovery.
- Makes health checking straightforward.
- Improves scalability and reliability.
- Allows Prometheus to control the scraping interval.