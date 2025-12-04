---
title: TCP Server
sidebar:
    order: 4
---
The TCP server module emits a message for every message it receives from clients that connect to it. Messages are determined by "framing" techniques as TCP is a stream based protocol.

- **type**: `net.tcp.server`
- **params**:
    - **ip**: (optional) IP address to bind the TCP server to, if left out it will listen on all interfaces
    - **port**: TCP port to listen on
    - **framing**: how to chunk of the incoming TCP stream into "messages"
        - LF `\n`
        - CR `\r`
        - CRLF `\r\n`
        - [SLIP](https://en.wikipedia.org/wiki/Serial_Line_Internet_Protocol)

### Example
Start a TCP server listening on port 8888, incoming data will be split on line-feed (`\n`)
```
- id: tcpServer
  type: net.tcp.server
  params:
    ip: 127.0.0.1
    port: 8888
    framing: LF
```