---
title: Filter On Change
sidebar:
    label: On Change
    order: 3
---

This processor will only pass messages through if the value of the message has changed since the last time a message was processed. This processor is useful for filtering out duplicate messages that may be emitted by a module or processor.

- **type**: `filter.change`


### Example
```yaml
- type: filter.change
```