---
title: SIP DTMF Server
sidebar:
    label: Server
    order: 1
---
This module starts a [SIP](https://en.wikipedia.org/wiki/Session_Initiation_Protocol) server that listens for incoming connections. When a call is received this module will emit events based on the touch tones (DTMF) received during the call. The event is sent out whenever the use presses the separator key defined in the params.

- **type**: `sip.dtmf.server`
- **params**:
    - **ip**: (optional) the IP address to bind the server to defaults to `0.0.0.0`
    - **port**: (optional) the port to listen on defaults to `5060`
    - **transport**: (optional) the transport protocol to use (e.g. `udp`, `tcp`, `ws`) defaults to `udp`
    - **userAgent**: (optional) the User-Agent string to use in SIP responses defaults to `showbridge`
    - **separator**: the DTMF separator key to know when to emit events

### Example
Start a UDP SIP server listening on port 5060 that will emit events whenever the user presses the `#` key on their phone during a call
```
- id: sipDTMFServer
  type: sip.dtmf.server
  params:
    ip: 127.0.0.1
    port: 5060
    transport: udp
    separator: '#'
```