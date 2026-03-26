---
title: Decode ArtNet Packet
tableOfContents: false
sidebar:
    label: Decode
    order: 1
---

- **type**: `artnet.packet.decode`

This processor will decode incoming bytes into an ArtNet packet. This processor will return an error if the message being processed is not an array of bytes.

### Example
```
- type: artnet.packet.decode
```