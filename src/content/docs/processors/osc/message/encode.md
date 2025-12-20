---
title: OSC Message Encode
sidebar:
    order: 2
---
The `osc.message.encode` module takes an OSC message and turns it into an array of bytes. This processor will return an error if the OSC message cannot be turned into bytes.

- **type**: `osc.message.encode`

### Example
```
- type: osc.message.encode
```