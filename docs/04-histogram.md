# Phase 4 — Histogram Metric

## Objective

Measure HTTP request latency and analyze response time distribution.

---

## Metric

`http_request_duration_seconds`

---

## What I Learned

A Histogram records observations rather than simply counting events.

For each HTTP request, it records how long the request took to complete.

Prometheus automatically creates the following metrics:

- `_bucket`
- `_sum`
- `_count`

These metrics allow you to analyze latency distributions and calculate response time statistics.

---

## Buckets

```text
0.005
0.01
0.025
0.05
0.1
0.3
0.5
1
2
5
```

Each bucket counts the number of requests that completed in **less than or equal to** the specified duration (in seconds).

---

## Why Use Seconds?

Prometheus follows a standard naming convention for time-based metrics.

Use:

```text
_seconds
```

Instead of:

```text
_ms
```

This keeps metrics consistent across different applications and monitoring systems.

---

## Operational Questions

- How fast is my API responding?
- Are request latencies increasing over time?
- What percentage of requests complete within a specific duration?

---

## Common Pitfalls

- Using a Counter to measure request duration.
- Choosing bucket ranges that don't match the application's expected response times.
- Using too many buckets, which increases the number of time series.

---

## Interview Notes

**Histogram** measures the distribution of observed values, such as request latency.

**Counter** measures how many times an event has occurred.