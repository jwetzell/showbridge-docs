---
title: Get Key/Value
sidebar:
    label: Get
    order: 1
---
The `kv.get` processor gets the value associated with a key from a compatible module. The output payload is the value if the key is found.

- **type**: `kv.get`
- **params**:
    - **module**: id of the module
    - **key**: the key to look up

### Example
This will attempt to get the value for the `counter` key from the module with an id of `redis`
```
- type: kv.get
  params:
    module: redis
    key: counter
```