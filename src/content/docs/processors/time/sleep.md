---
title: Sleep
sidebar:
    order: 1
---
The `time.sleep` processor will sleep for the specified `duration` in milliseconds before passing the message to the next processor.

- **type**: `time.sleep`
- **params**:
    - **duration**: the duration to sleep in milliseconds

### Example
This would sleep for 5 seconds before passing the message to the next processor.
```
- type: time.sleep
  params:
    duration: 5000
```