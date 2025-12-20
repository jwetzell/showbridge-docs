---
title: String Decode
sidebar:
    order: 1
---
The `string.decode` processor takes a array of bytes and turn it into string. This processor will return an error if the message being processed is not an array of bytes.

- **type**: `string.decode`

### Example
```
- type: string.decode
```