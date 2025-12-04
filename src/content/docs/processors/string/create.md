---
title: Create
sidebar:
    order: 3
---
The string create processor creates a string based on the provided template. This processor will return an error if there is an issue executing the template. The template property is just a [Go template](https://pkg.go.dev/text/template) that will be evaluated with the incoming message provided as an environment.

- **type**: `string.create`

### Example
This would create a string using the `Address` property of the incoming message like and OSC message
```
- type: string.create
  params: 
    template: "{{.Address}}
```