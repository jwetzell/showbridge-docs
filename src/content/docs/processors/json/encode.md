---
title: Encode JSON
tableOfContents: false
sidebar:
    label: Encode
    order: 1
---

This processor will encode an incoming object into a JSON byte array. This processor will return an error if the message being processed is not able to be serialized as JSON.

- **type**: `json.encode`


### Example
```
- type: json.encode
```
