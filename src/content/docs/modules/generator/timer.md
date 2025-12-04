---
title: Timer
sidebar:
    order: 1
---
The timer module emits only one message after a specified duration

- **type**: `gen.timer`
- **params**:
    - **duration**: time in milliseconds to wait before emitting message

### Example snippet
Emits a message 5 seconds after the module is initialized
```
- id: 5secs
  type: gen.timer
    params:
      duration: 5000
```