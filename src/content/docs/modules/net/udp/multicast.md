---
title: UDP Multicast
sidebar:
    label: Multicast
    order: 3
---

- **type**: `net.udp.multicast`
- **params**:
    - **ip**: the multicast IP address to listen to
    - **port**: the port to listen on

### Example
Listen to the mDNS multicast address on port 5353
```
- id: mdnsListener
  type: net.udp.multicast
  params:
    ip: 224.0.0.251
    port: 5353
```