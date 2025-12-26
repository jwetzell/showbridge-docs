---
title: Timer
sidebar:
    order: 1
---
The `gen.timer` module emits only one message after a specified duration. Sending any message to this module will reset the timer.

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