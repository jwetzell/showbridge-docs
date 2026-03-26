---
title: SIP Call Server
sidebar:
    label: Server
    order: 1
---
This module starts a [SIP](https://en.wikipedia.org/wiki/Session_Initiation_Protocol) server that listens for incoming connections and emits call events when a new call is received. This can be used with cheap SIP gateway devices to connect an analog phone line and do interesting things like [firing QLab cues with phone calls](/examples/dial-a-cue). 
- **type**: `sip.call.server`
- **params**:
    - **ip**: (optional) the IP address to bind the server to defaults to `0.0.0.0`
    - **port**: (optional) the port to listen on defaults to `5060`
    - **transport**: (optional) the transport protocol to use (e.g. `udp`, `tcp`, `ws`) defaults to `udp`
    - **userAgent**: (optional) the User-Agent string to use in SIP responses defaults to `showbridge`

### Example
Start a UDP SIP server listening on port 5060
```
- id: sipCallServer
  type: sip.call.server
  params:
    ip: 127.0.0.1
    port: 5060
    transport: udp
```