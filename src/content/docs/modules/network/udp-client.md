---
title: UDP Client
sidebar:
    order: 5
---
The UDP client module sends messages to a the configured `host` and `port`. This module does not receive any message and so using it as an `input` to a [route](/concepts/routes) would be pointless.

- **type**: `net.udp.client`
- **params**:
    - **host**: IP or FQDN to send message to
    - **port**: UDP port to send messages to

### Example
setup up a UDP client that will send UDP packets to `127.0.0.1` on port 8888
```
- id: udpClient
  type: net.udp.client
  params:
    host: 127.0.0.1
    port: 8888
```