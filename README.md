# Observability Learning Lab

A hands-on repository documenting my journey into modern observability using **Prometheus** and **Grafana**.

Instead of following step-by-step tutorials, this project focuses on understanding observability by implementing concepts in a real Node.js application. Each topic is explored individually, documented with notes, and committed incrementally to mirror a professional development workflow.

---

## Purpose

The goal of this repository is to build a strong foundation in observability through practical implementation and experimentation.

Topics covered include:

- Monitoring fundamentals
- Observability concepts
- Prometheus architecture
- Metric instrumentation
- Metric types (Counter, Gauge, Histogram)
- Labels and time series
- PromQL
- Grafana dashboards
- Monitoring best practices

The knowledge gained from this project will later be applied to **PulseOps**, a production-grade API monitoring platform.

---

## Tech Stack

- Node.js
- Express.js
- Prometheus
- prom-client
- Grafana
- Git & GitHub

---

## Features Implemented

### Prometheus Integration

- Configured a Prometheus server
- Exposed a `/metrics` endpoint
- Configured Prometheus scraping
- Enabled default Node.js runtime metrics

### Custom Metrics

#### Counter

- `http_requests_total`

#### Gauge

- `active_requests`
- `nodejs_memory_usage_bytes`

#### Histogram

- `http_request_duration_seconds`

### Labels

Implemented metric labels to provide meaningful dimensions for monitoring:

- `method`
- `route`
- `status_code`

### PromQL

Practiced querying metrics using:

- `rate()`
- `increase()`
- `sum()`

Used PromQL to answer operational questions such as:

- How much traffic is the API receiving?
- Which routes receive the most requests?
- How many requests occurred during a specific time window?

---

## Learning Roadmap

- [x] Repository Initialization
- [x] Development Environment Setup
- [x] Express Application Setup
- [x] Prometheus Integration
- [x] Metrics Endpoint
- [x] Counter Metrics
- [x] Gauge Metrics
- [x] Histogram Metrics
- [x] Metric Labels
- [x] PromQL Fundamentals
- [ ] Grafana Integration
- [ ] Dashboard Creation
- [ ] Dashboard Variables
- [ ] Monitoring Best Practices
- [ ] Production-style Dashboards

---

## Repository Structure

```text
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


---

## Current Progress

| Phase | Status |
|--------|--------|
| Repository Setup | ✅ Completed |
| Express Application | ✅ Completed |
| Prometheus Integration | ✅ Completed |
| Metrics Endpoint | ✅ Completed |
| Counter Metrics | ✅ Completed |
| Gauge Metrics | ✅ Completed |
| Histogram Metrics | ✅ Completed |
| Labels | ✅ Completed |
| PromQL Fundamentals | ✅ Completed |
| Grafana Integration | ⏳ Next |
| Dashboard Creation | ⏳ Upcoming |

---

## Key Concepts Learned

Throughout this project, I have learned:

- How Prometheus collects metrics using a pull-based architecture.
- When to use Counters, Gauges, and Histograms.
- How labels create separate time series.
- Why high-cardinality labels should be avoided.
- How Histograms measure request latency.
- How PromQL is used to analyze application behavior and answer operational questions.
- How default Node.js runtime metrics complement custom application metrics.

---

## Documentation

Each phase is documented separately to capture both implementation details and the concepts learned.

| Document | Topic |
|----------|-------|
| `01-prometheus-basics.md` | Prometheus architecture, scraping, metrics endpoint, and default metrics |
| `02-counter.md` | Counter metrics and request counting |
| `03-gauge.md` | Gauge metrics and tracking current state |
| `04-histogram.md` | Request latency and Histograms |
| `05-labels.md` | Labels, time series, and cardinality |
| `06-promql.md` | PromQL fundamentals and common queries |

---

## What's Next

The next phase of the project focuses on visualizing metrics with Grafana.

Planned topics include:

- Grafana installation and configuration
- Connecting Grafana to Prometheus
- Dashboard creation
- Traffic visualization
- Request latency dashboards
- Memory and CPU monitoring
- Dashboard variables
- Production-style monitoring dashboards

---

## Learning Approach

Every feature in this repository follows the same engineering workflow:

1. Identify an operational question.
2. Select the appropriate metric type.
3. Design meaningful labels.
4. Instrument the application.
5. Verify the generated metrics.
6. Query the data using PromQL.
7. Visualize the results in Grafana.

This approach emphasizes understanding why metrics exist and how they are used in real-world monitoring systems, rather than simply learning the syntax.

---

## Project Status

**Status:** Active Development

### Completed

- Prometheus Fundamentals
- Metric Instrumentation
- PromQL Basics

### Currently Working On

- Grafana Integration
- Dashboard Development
- Observability Visualization

---

## License

This project is available under the **MIT License**.