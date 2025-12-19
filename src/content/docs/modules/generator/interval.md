---
title: Interval
sidebar:
    order: 2
---
The `gen.interval` module emits a message at a specified duration

- **type**: `gen.interval`
- **params**:
    - **duration**: time in milliseconds between messsages

### Example snippet
Emits a message every 3 seconds
```
- id: every3Secs
  type: gen.interval
    params:
      duration: 3000
```