---
title: HTTP Server
sidebar:
    order: 2
---
The HTTP server module emits a message for every HTTP request that is made to the server

- **type**: `net.http.server`
- **params**:
    - **port**: TCP port to listen for HTTP requests on

### Example
Start an HTTP server listening on port 3000
```
- id: httpServer
  type: net.http.server
  params:
    port: 3000
```