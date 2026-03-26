---
title: Create OSC Message
sidebar:
    label: Create
    order: 1
---
This processor will create an OSC message from the provided parameters. This processor will return an error if any of the required parameters are missing or if the parameters are of the wrong type. The address parameter is required, while the args and types parameters are optional. However, if args are provided, then types must also be provided and must match the amount of args provided.

- **type**: `osc.message.create`
- **params**:
    - **address**: the address of the OSC message.
    - **args**: (optional) array of string templates for each argument.
    - **types**: (optional) a single string with the of each arg in order. This is required if args are provided.

### Example
Create an OSC message with the address `/test/message` and two integer arguments from the payload of the message being processed.

```
- type: osc.message.create
  params:
    address: "/test/message"
    args: ["{{.Payload[0]}}", "{{.Payload[1]}}"]
    types: "ii"
```