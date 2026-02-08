---
title: Int Parse
sidebar:
    order: 1
---
The `int.parse` processor takes a string and parses it as an integer with the specified `base` and `bitSize`. This processor will return an error if the message being processed is not a string or if the string cannot be parsed into an integer.

- **type**: `int.parse`
- **params**:
    - **base**: (optional) the base to use for parsing the integer, defaults to 10
    - **bitSize**: (optional) the bit size of the integer to parse, defaults to 64

### Example
This would parse the string payload as a 32 bit, base 10 integer and set the payload to that value.
```
- type: int.parse
  params:
    bitSize: 32
```