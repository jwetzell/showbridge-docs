---
title: Make HTTP Request
sidebar:
    label: Make Request
    order: 1
---

This process will make an HTTP request to the specified URL using the specified method. The response will be passed through to the next processor in the chain. This processor will return an error if the request fails for any reason (e.g. network error, invalid URL, etc.).

- **type**: `http.request.do`
- **params**:
    - **method**: the HTTP method to use for the request (e.g. `GET`, `POST`, `PUT`, etc.)
    - **url**: the URL to send the request to


### Example
Make a GET request to `https://example.com`
```
- type: http.request.do
  params:
    method: GET
    url: https://example.com
```