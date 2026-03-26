---
title: Create MQTT Message
sidebar:
    order: 1
---
This processor will create an MQTT message from the provided parameters. This processor will return an error if any of the required parameters are missing or if the parameters are of the wrong type.

- **type**: `mqtt.message.create`
- **params**:
    - **topic**: the topic to publish the message to.
    - **qos**: the QoS level of the message.
    - **retained**: whether the message should be retained by the broker.
    - **payload**: the payload of the message. This can be a string or a byte array.

### Example
```
- type: mqtt.message.create
  params:
    topic: "test/topic"
    qos: 1
    retained: false
    payload: "Hello, World!"
```