---
title: Decode MIDI Message
tableOfContents: false
sidebar:
    label: Decode
    order: 3
---
This processor will decode incoming bytes into a MIDI message. This processor will return an error if the message being processed is not an array of bytes.

- **type**: `midi.message.decode`

### Example
```
- type: midi.message.decode
```
