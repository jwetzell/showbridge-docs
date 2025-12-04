---
title: UDP Server
sidebar:
    order: 6
---
The UDP server module emits a message for every incoming UDP datagram.

- **type**: `net.udp.server`
- **params**:
    - **ip**: (optional) IP address to bind the UDP server to, if left out it will listen on all interfaces
    - **port**: UDP port to listen on

### Example
Start a UDP server listening on port 8888 and only on `127.0.0.1`
```
- id: udpServer
  type: net.udp.server
  params:
    ip: 127.0.0.1
    port: 8888
```