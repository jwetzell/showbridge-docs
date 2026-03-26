---
title: PSN Client
sidebar:
    label: Client
    order: 1
---

- **type**: `psn.client`

This module listens on the [PosiStageNet](http://posistage.net/) multicast address and emits tracker states anytime a new PSN message is received.

### Example
List
```
- id: psnClient
  type: psn.client
```