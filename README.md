# Observability Learning Lab

A practical learning repository focused on understanding modern application observability using **Prometheus** and **Grafana**.

This project is not built by simply following tutorials. Instead, each observability concept is explored, implemented, tested, and documented through a real **Node.js + Express.js** application.

The goal is to understand how monitoring systems work internally — from exposing application metrics, designing meaningful measurements, querying data with PromQL, and eventually building production-style dashboards.

The concepts learned in this project will later be applied to **PulseOps**, an API monitoring platform.

---

# Project Goals

The main objective of this repository is to build a strong foundation in observability by implementing core monitoring concepts in practice.

The project covers:

- Observability fundamentals
- Prometheus architecture
- Metrics collection and instrumentation
- Metric types and use cases
- Labels and time-series design
- PromQL querying
- Grafana visualization
- Monitoring best practices

---

# Tech Stack

- **Node.js**
- **Express.js**
- **Prometheus**
- **prom-client**
- **Grafana**
- **Git & GitHub**

---

# Implemented Features

## Prometheus Integration

Implemented the foundation required for application monitoring:

- Configured Prometheus locally
- Created a metrics endpoint
- Connected Prometheus with the application
- Configured metric scraping
- Enabled default Node.js runtime metrics

---

## Application Metrics

Implemented custom metrics to understand different monitoring scenarios.

### Counter Metrics

Used for values that continuously increase.

Implemented:

```
http_requests_total
```

Tracks the total number of HTTP requests received by the application.

---

### Gauge Metrics

Used for values that represent the current state of a system.

Implemented:

```
active_requests
nodejs_memory_usage_bytes
```

Used for monitoring:

- Active requests currently being processed
- Current application memory usage

---

### Histogram Metrics

Used for measuring distributions such as request duration.

Implemented:

```
http_request_duration_seconds
```

Tracks:

- Request latency
- Response time distribution
- Performance trends

---

# Labels & Time Series

Implemented metric labels to create meaningful dimensions for analysis.

Current labels:

```
method
route
status_code
```

These allow metrics to be filtered and analyzed based on:

- HTTP methods
- API routes
- Response status codes

Also explored the importance of avoiding unnecessary high-cardinality labels.

---

# PromQL Practice

Learned how to query and analyze metrics using PromQL.

Practiced:

```promql
rate()
increase()
sum()
```

Used PromQL to answer practical monitoring questions:

- How many requests is the API receiving?
- Which endpoints are used the most?
- How many requests happened within a specific period?
- What is the current request rate?

---

# Repository Structure

```
observability-learning-lab/
│
├── docs/
│   ├── 01-prometheus-basics.md
│   ├── 02-counter.md
│   ├── 03-gauge.md
│   ├── 04-histogram.md
│   ├── 05-labels.md
│   └── 06-promql.md
│
├── monitoring/
│   └── prometheus.yml
│
├── screenshots/
│
├── src/
│   │
│   ├── config/
│   │   └── metrics.js
│   │
│   ├── middleware/
│   │   └── metrics.middleware.js
│   │
│   ├── routes/
│   │   ├── index.routes.js
│   │   ├── metrics.routes.js
│   │   └── test.routes.js
│   │
│   ├── app.js
│   └── server.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

# Learning Progress

| Topic | Status |
|---|---|
| Repository Setup | ✅ Completed |
| Express Application Setup | ✅ Completed |
| Prometheus Integration | ✅ Completed |
| Metrics Endpoint | ✅ Completed |
| Counter Metrics | ✅ Completed |
| Gauge Metrics | ✅ Completed |
| Histogram Metrics | ✅ Completed |
| Metric Labels | ✅ Completed |
| PromQL Fundamentals | ✅ Completed |
| Grafana Integration | ⏳ Next |
| Dashboard Development | ⏳ Upcoming |

---

# Concepts Learned

During this project, I explored:

- How Prometheus follows a pull-based metrics collection model.
- How applications expose metrics through HTTP endpoints.
- The difference between Counters, Gauges, and Histograms.
- How labels create separate metric time series.
- Why poor label design can create high-cardinality problems.
- How Histograms help analyze application latency.
- How PromQL converts raw metrics into useful operational insights.
- How runtime metrics and custom application metrics work together.

---

# Documentation

Each implementation phase is documented separately with both theory and practical implementation details.

| File | Topic |
|---|---|
| `01-prometheus-basics.md` | Prometheus architecture, scraping, and metrics |
| `02-counter.md` | Counter metrics and request tracking |
| `03-gauge.md` | Gauge metrics and current system state |
| `04-histogram.md` | Latency measurement using Histograms |
| `05-labels.md` | Labels, dimensions, and cardinality |
| `06-promql.md` | PromQL queries and metric analysis |

---

# Development Approach

Each observability feature follows a practical engineering workflow:

1. Identify a monitoring requirement.
2. Choose the correct metric type.
3. Design useful labels.
4. Instrument the application.
5. Verify generated metrics.
6. Analyze data using PromQL.
7. Visualize results using Grafana.

The focus is not only learning Prometheus syntax, but understanding how monitoring decisions are made in real production systems.

---

# Next Steps

The upcoming phase focuses on visualization and deeper monitoring workflows.

Planned improvements:

- Grafana setup and configuration
- Connecting Grafana with Prometheus
- Building application dashboards
- Request traffic visualization
- Latency monitoring dashboards
- CPU and memory monitoring
- Dashboard variables
- Production-style observability dashboards

---

# Project Status

**Status:** Active Development

## Completed

✅ Prometheus Fundamentals  
✅ Application Metric Instrumentation  
✅ Custom Metrics  
✅ Labels & Time Series  
✅ PromQL Basics  

## Currently Working On

    Grafana Integration  
    Dashboard Development  
    Advanced Observability Concepts  

---

# License

This project is licensed under the **MIT License**.