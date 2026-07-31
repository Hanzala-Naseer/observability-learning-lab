# Phase 3 — Gauge Metric

## Objective

Monitor values that can increase and decrease over time using Prometheus Gauges.

---

## Metrics

- `active_requests`
- `nodejs_memory_usage_bytes`

---

## What I Learned

A Gauge represents the current value of a metric at any given moment.

Common use cases include:

- Active requests
- Active users
- Queue length
- Memory usage
- CPU usage

Unlike a Counter, a Gauge can:

- Increase
- Decrease
- Be set to a specific value

---

## Why `active_requests` Returns to Zero

The `active_requests` metric tracks the number of requests currently being processed.

Example:

```text
Request starts:
active_requests = 1

Request completes:
active_requests = 0
```

This behavior is expected because a Gauge reflects the current state, not the total number of requests.

---

## Why Memory Metrics Use `collect()`

Memory usage changes continuously while the application is running.

Instead of updating the metric manually, the Gauge retrieves the latest value whenever Prometheus scrapes the `/metrics` endpoint.

```js
collect() {
  this.set(process.memoryUsage().heapUsed);
}
```

This ensures the metric always reports the application's current memory usage.

---

## Key Takeaways

- Gauges are used for values that fluctuate over time.
- They can increase, decrease, or be set directly.
- They are ideal for monitoring the current state of an application rather than counting events.
- The `collect()` method is useful for values that change continuously, such as memory usage.