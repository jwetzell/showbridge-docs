---
title: Create SIP Audio Response
sidebar:
    label: Create
    order: 1
---
This processor will create a SIP response message with an audio file as the payload. If this message is output to a SIP module using the [router.output](/processors/router/output) processor, then the SIP module will send the response to the caller and play the audio file included in the response.

- **type**: `sip.response.audio.create`
- **params**:
    - **preWait**: the amount of time in milliseconds to wait before sending the response
    - **audioFile**: the path to the audio file to include in the response
    - **postWait**: the amount of time in milliseconds to wait after sending the response

### Example
This example will create a SIP response that will wait 1 second then play `response.wav` then wait another second before completing the response.
```
- type: sip.response.audio.create
  params:
    preWait: 1000
    audioFile: "response.wav"
    postWait: 1000
```