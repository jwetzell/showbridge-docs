---
title: Debug Log
sidebar:
    label: Log
    order: 1
---

- **type**: `debug.log`
This processor will log information about the message being processed to the console. This processor does not modify the message in any way and will pass the message through to the next processor in the chain.

### Example
```yaml
- type: debug.log
```