---
title: String Filter
sidebar:
    order: 4
---
The `string.filter` processor takes a string and turns it into an array of bytes. This processor will return an error if the message being processed is not a string.

- **type**: `string.filter`
- **params**:
    - **pattern**: regex pattern to match against the incoming string

### Example
Match strings starting with `hello`
```
- type: string.filter
  params:
    pattern: "^hello.*"
```