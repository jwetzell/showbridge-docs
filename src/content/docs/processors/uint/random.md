---
title: Uint Random
sidebar:
    order: 2
---
The `uint.random` processor will set the payload to a random unsigned integer between the specified `min` and `max` value. The minimum and maximum values are inclusive.

- **type**: `uint.random`
- **params**:
    - **min**: the minimum value for the random unsigned integer.
    - **max**: the maximum value for the random unsigned integer.

### Example
This would generate a random unsigned integer between 0 and 127 and set the payload to that value.
```
- type: uint.random
  params:
    min: 0
    max: 127
```