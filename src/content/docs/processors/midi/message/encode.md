---
title: Encode MIDI Message
sidebar:
    label: Encode
    order: 2
---
This processor will encode a MIDI message into an array of bytes. This processor will return an error if the message being processed is not a MIDI message.

- **type**: `midi.message.encode`

### Example
```
- type: midi.message.encode
```