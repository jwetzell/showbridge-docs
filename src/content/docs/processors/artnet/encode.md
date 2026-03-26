---
title: Encode ArtNet Packet
tableOfContents: false
sidebar:
    label: Encode
    order: 2
---

- **type**: `artnet.packet.encode`
This processor will encode an ArtNet packet into an array of bytes. This processor will return an error if the message being processed is not an ArtNet packet.

### Example
```
- type: artnet.packet.encode
```