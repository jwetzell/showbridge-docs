---
title: Create Random Float
sidebar:
    label: Random
    order: 2
---
The `float.random` processor will set the payload to a random float between the specified `min` and `max` value.

- **type**: `float.random`
- **params**:
    - **bitSize**: (optional) the bit size of the float to generate, defaults to 32
    - **min**: the minimum value for the random float (inclusive).
    - **max**: the maximum value for the random float (exclusive).

### Example
This would generate a random 64-bit float between 1.1 and 1.5 and set the payload to that value.
```yaml
- type: float.random
  params:
    bitSize: 64
    min: 1.0
    max: 1.5
```