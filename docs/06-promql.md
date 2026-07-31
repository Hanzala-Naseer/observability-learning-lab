# Phase 6 — PromQL

## Objective

Learn how to query and analyze Prometheus metrics using PromQL.

---

## Queries Practiced

### Current Counter

```promql
http_requests_total
```

Returns the current value of the counter for each time series.

---

### Request Rate

```promql
rate(http_requests_total[5m])
```

Calculates the average number of requests per second over the last 5 minutes.

---

### Total Request Rate

```promql
sum(rate(http_requests_total[5m]))
```

Aggregates the request rate across all routes, methods, and status codes.

---

### Requests in a Time Window

```promql
increase(http_requests_total[20m])
```

Returns the total number of requests received during the last 20 minutes.

---

### Total Requests Across the API

```promql
sum(increase(http_requests_total[20m]))
```

Calculates the total requests across all time series within the selected time window.

---

## Operational Questions

- How much traffic is my API receiving?
- Which routes receive the most requests?
- How many requests occurred during a specific time period?

---

## Observations

When I first ran:

```promql
rate(http_requests_total[5m])
```

no data was returned because there were not enough samples within the selected 5-minute window.

After increasing the range to 20 minutes and generating additional traffic, the query returned meaningful results.

---

## Key Takeaways

- PromQL makes it easy to analyze time-series metrics.
- `rate()` is best for measuring how quickly a Counter increases.
- `increase()` returns the total number of events within a time window.
- `sum()` aggregates multiple time series into a single value.

---

## Interview Notes

- **Counter** → Total number of events
- **`rate()`** → Average rate of events per second
- **`increase()`** → Total events during a specified time period
- **`sum()`** → Aggregates multiple time series into a single result