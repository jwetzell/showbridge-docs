---
title: Uint Parse
sidebar:
    order: 1
---
The `uint.parse` processor takes a string and parses it as an unsigned integer with the specified `base` and `bitSize`. This processor will return an error if the message being processed is not a string or if the string cannot be parsed into an unsigned integer.

- **type**: `uint.parse`
- **params**:
    - **base**: (optional) the base to use for parsing the unsigned integer, defaults to 10
    - **bitSize**: (optional) the bit size of the unsigned integer to parse, defaults to 64

### Example
This would parse the string payload as a 32 bit, base 10 unsigned integer and set the payload to that value.
```
- type: uint.parse
  params:
    bitSize: 32
```