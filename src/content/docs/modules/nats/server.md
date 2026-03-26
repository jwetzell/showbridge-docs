---
title: NATS Server
sidebar:
    label: Server
    order: 2
---
This module starts a NATS server that listens for incoming connections.
- **type**: `nats.server`
- **params**:
    - **ip**: (optional) the IP address to bind the server to defaults to `0.0.0.0`
    - **port**: (optional) the port to listen on defaults to `4222`

### Example
Start a local NATS server listening on port 5555
```
- id: httpServer
  type: http.server
  params:
    ip: 127.0.0.1
    port: 5555
```