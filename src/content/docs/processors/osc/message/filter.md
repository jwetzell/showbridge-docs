---
title: Filter
sidebar:
    order: 3
---
The `osc.message.filter` module takes an OSC message and matches it against a configured [OSC address pattern](https://opensoundcontrol.stanford.edu/spec-1_0.html). When the message does not match the payload of the processor will be set to `nil` result in the route being terminated. This processor will return an error if the OSC address pattern cannot be parsed.

- **type**: `osc.message.filter`

### Example
```
- type: osc.message.filter
  params:
    address: "/test/{a,b}/start"
```