---
title: Create HTTP Response
sidebar:
    label: Create
    order: 2
---

This processor will create a new HTTP response with the specified status code and body template. The created response will be passed through to the next processor in the chain. If the response is subsequently sent to an HTTP server module using the [router.output](../router/output.md) processor, the status code and body template set by this processor will be used for the response sent to the client. This processor will return an error if there is an issue executing the body template.

- **type**: `http.response.create`
- **params**:
    - **status**: the HTTP status code to set for the response (e.g. `200`, `404`, etc.)
    - **body**: the body template to set for the response

### Example
This would create an HTTP response with a status code of `200` and a body of `OK`
```yaml
- type: http.response.create
  params:
    status: 200
    body: "OK"
```