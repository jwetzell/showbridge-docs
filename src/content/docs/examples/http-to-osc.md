---
title: HTTP > OSC
---

This config starts an HTTP server listening on port `3000`. Any HTTP request coming into that server will result in a OSC message being sent to `127.0.0.1:8000` with the address set to the path from the incoming HTTP message.

```
# config.yaml
modules:
  - id: http
    type: net.http.server
    params:
      port: 3000
  - id: udp
    type: net.udp.client
    params:
      host: 127.0.0.1
      port: 8000
routes:
  - input: http
    processors:
      - type: osc.message.create    # create OSC message
        params:
          address: "{{.URL.Path}}"  # template the address from the incoming message
      - type: osc.message.encode    # turn OSC message into bytes
    output: udp
```
