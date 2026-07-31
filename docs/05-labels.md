# Phase 5 — Labels

## Objective

Add meaningful context to metrics using labels for better filtering and analysis.

---

## Labels Used

- `method`
- `route`
- `status_code`

---

## What I Learned

Labels add dimensions to a metric, allowing Prometheus to create separate time series for each unique label combination.

Example:

```text
GET  /users  200
GET  /users  404
POST /users  200
```

Each combination above is stored as a separate time series.

---

## Good Labels

Choose labels with a limited number of possible values, such as:

- `method`
- `route`
- `status_code`

These labels make metrics easy to filter and aggregate without significantly increasing storage requirements.

---

## Bad Labels

Avoid labels with unique or unbounded values, including:

- `userId`
- `sessionId`
- `requestId`
- `timestamp`

These labels create high-cardinality metrics, which consume more memory and reduce Prometheus performance.

---

## Why `userId` Is a Bad Label

For example:

```text
100,000 users
      ↓
100,000 unique time series
      ↓
Higher memory usage
      ↓
Slower queries and increased Prometheus load
```

Using unique identifiers as labels can quickly overwhelm the monitoring system.

---

## Key Takeaways

- Labels provide context and make metrics easier to filter and aggregate.
- Every unique label combination creates a new time series.
- Keep label values predictable and limited.
- Avoid high-cardinality labels that generate excessive numbers of time series.

---

## Interview Notes

Good labels have a small, fixed set of possible values.

Bad labels have unlimited or highly variable values, leading to high-cardinality metrics and poor Prometheus performance.