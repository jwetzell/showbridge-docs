---
title: Create SIP DTMF Response
tableOfContents: false
sidebar:
    label: Create
    order: 1
---
This processor will create a SIP DTMF response from the provided parameters. If this message is output to a SIP module using the [router.output](/processors/router/output) processor, then the SIP module will send the response to the caller and play the DTMF tones specified.

- **type**: `sip.response.dtmf.create`
- **params**:
    - **preWait**: the amount of time in milliseconds to wait before sending the response
    - **digits**: the DTMF digits to include in the response
    - **postWait**: the amount of time in milliseconds to wait after sending the response

### Example
This example will create a SIP response that will wait 1 second then play the DTMF digits "1234" then wait another second before completing the response.
```
- type: sip.response.dtmf.create
  params:
    preWait: 1000
    digits: "1234"
    postWait: 1000
```