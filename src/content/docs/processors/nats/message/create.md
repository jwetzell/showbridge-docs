---
title: Create NATS Message
sidebar:
    label: Create
    order: 1
---

This processor will create a NATS message from the provided parameters. This processor will return an error if any of the required parameters are missing or if the parameters are of the wrong type.
- **type**: `nats.message.create`
- **params**:
    - **subject**: the subject to publish the message to.
    - **payload**: the payload of the message.

### Example
```
- type: nats.message.create
  params:
    subject: "events"
    payload: "Hello, World!"
```