---
title: TCP Client
sidebar:
    order: 1
---
The `net.tcp.client` module connects to TCP server and emits messages based on the data it receives from the server that it connects to. Messages are determined by "framing" techniques as TCP is a stream based protocol. The module will attempt to reconnect anytime the connection is closed.

- **type**: `net.tcp.client`
- **params**:
    - **host**: IP or FQDN to connect to
    - **port**: TCP port to connect to
    - **framing**: how to chunk the TCP stream into "messages"
        - LF `\n`
        - CR `\r`
        - CRLF `\r\n`
        - [SLIP](https://en.wikipedia.org/wiki/Serial_Line_Internet_Protocol)
        - RAW (no framing is done bytes are sent out as they are received)


### Example
Open a TCP connection to `127.0.0.1` port 8888, any incoming data will be split on line-feed (`\n`)
```
- id: tcpClient
  type: net.tcp.client
  params:
    host: 127.0.0.1
    port: 8888
    framing: LF
```