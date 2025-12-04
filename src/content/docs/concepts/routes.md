---
title: Routes
sidebar:
    order: 3
---

Routes take the messages coming from a module and push them out another module. The message can be optionally "processed" with any number of processor steps.

## YAML Definition
- **input**: the id of the [module](/reference/modules) that will provide messages to this route
- **processors**: (optional) array of [processors](/reference/processors) that will be called in order and the result of the previous will be fed to the next processor.
  - if at any point the output of a processor is `null` the entire route will be terminated (subject to change to support output `null` values?)
  - an error in a processor step will also result in the route being terminated
- **output**: the id of the [module](/reference/modules) that will consume messages from the route