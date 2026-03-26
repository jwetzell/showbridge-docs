---
title: Create Random Int
sidebar:
    order: 2
---
The `int.random` processor will set the payload to a random integer between the specified `min` and `max` value.

- **type**: `int.random`
- **params**:
    - **min**: the minimum value for the random integer (inclusive).
    - **max**: the maximum value for the random integer (inclusive).

### Example
This would generate a random integer between -127 and 127 and set the payload to that value.
```
- type: int.random
  params:
    min: -127
    max: 127
```