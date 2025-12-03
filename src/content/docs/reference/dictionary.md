---
title: Dictionary
sidebar:
  order: 1
---

- **router**: throughout documentation I will use the term router to refer to configured/running instance of showbridge
- **modules**: modules are configured instances that can produce or consume message like a TCP server or a UDP client
- **routes**: routes take messages coming from a module (input), do some optional processing and send that message to a module (output)
- **processors**: processors process messages, the processors are localized to the route the processor is a part of. Examples of processors or turning bytes into an OSC message or parsing a string into an integer 