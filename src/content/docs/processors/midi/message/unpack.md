---
title: Unpack MIDI Message
tableOfContents: false
sidebar:
    label: Unpack
    order: 4
---
This processor will unpack a MIDI message into its individual components. This processor will return an error if the message being processed is not a MIDI message.

- **type**: `midi.message.unpack`

### Example
```
- type: midi.message.unpack
```