---
title: Decode OSC Message
tableOfContents: false
sidebar:
    label: Decode
    order: 3
---
The `osc.message.decode` processor takes a array of bytes and turn it into OSC message if it can be. This processor will return an error if the bytes cannot be parsed as an OSC message

- **type**: `osc.message.decode`

### Example
```
- type: osc.message.encode
```