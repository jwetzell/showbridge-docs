---
title: Float Parse
sidebar:
    order: 1
---
The `float.parse` processor takes a string and parses it as a float with the specified `base` and `bitSize`. This processor will return an error if the message being processed is not a string or if the string cannot be parsed into a float.

- **type**: `float.parse`
- **params**:
    - **bitSize**: (optional) the bit size of the float to parse, defaults to 64

### Example
This would parse the string payload as a 32 bit float and set the payload to that value.
```
- type: float.parse
  params:
    bitSize: 32
```