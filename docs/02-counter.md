# Phase 2 — Counter Metric

## Objective

Track the total number of HTTP requests received by the application using a Prometheus Counter.

---

## Metric

`http_requests_total`

---

## What I Learned

A Counter is a metric that only increases over time. It is used to measure events that occur repeatedly throughout the application's lifecycle.

Common use cases include:

- HTTP requests
- Errors
- User logins
- Payments
- Orders

---

## Labels

The `http_requests_total` metric uses the following labels:

- `method`
- `route`
- `status_code`

Each unique combination of labels creates a separate time series.

Examples:

```text
GET  /users  200
GET  /users  404
POST /users  201
```

Each of the above is stored as its own time series.

---

## Operational Question

How much traffic is my API receiving?

---

## Useful PromQL

```promql
http_requests_total
```

Returns the total number of requests grouped by their label combinations.

---

## Key Takeaways

- Counters only increase and reset when the application restarts.
- Labels make it possible to break down request traffic by method, route, and status code.
- Counters are the standard choice for tracking application events over time.