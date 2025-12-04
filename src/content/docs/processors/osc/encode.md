---
title: Encode
sidebar:
    order: 1
---
The osc encode module takes an OSC message and turns it into an array of bytes. This processor will return an error if the OSC message cannot be turned into bytes.

- **type**: `osc.message.encode`

### Example
```
- type: osc.message.encode
```