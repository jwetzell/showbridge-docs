---
title: Scale Int
sidebar:
    label: Scale
    order: 3
---

This processor will scale an integer value from one range to another. This processor will return an error if the message being processed is not an integer or if the parameters are not valid (e.g. if `inMin` is greater than or equal to `inMax`, etc.).

- **type**: `int.scale`
- **params**:
    - **inMin**: the minimum value of the input range
    - **inMax**: the maximum value of the input range
    - **outMin**: the minimum value of the output range
    - **outMax**: the maximum value of the output range

### Example
Scale an integer value from the range 0-255 to the range 0-100
```
- type: int.scale
  params:
    inMin: 0
    inMax: 255
    outMin: 0
    outMax: 100
```