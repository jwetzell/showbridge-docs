---
title: String Split
sidebar:
    order: 5
---
The `string.split` processor takes a string and turns it into an array of strings by splitting on `params.separator`. This processor will return an error if the message being processed is not a string.

- **type**: `string.split`
- **params**:
    - **pattern**: string to split incoming string on

### Example
Split incoming string on `,` i.e `"one,two,three"` -> `["one","two","three"]`
```
- type: string.split
  params:
    separator: ","
```