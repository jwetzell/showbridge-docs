---
title: Output from Router
sidebar:
    label: Output
    order: 1
---
The `router.output` processor takes any payload and outputs to the specified module.

- **type**: `router.output`
- **params**:
    - **module**: the id of the [module](/concepts/modules) to output to.


### Example
Output to the `osc-out` module.
```
- type: router.output
  params:
    module: osc-out
```