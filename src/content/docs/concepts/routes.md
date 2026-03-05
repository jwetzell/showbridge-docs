---
title: Routes
sidebar:
    order: 3
---

Routes take the messages coming from a module and push them through a list of [processors](/concepts/processors). Having no processors is valid but serves no real purpose and is basically a no-op. 

## YAML Definition
- **input**: the id of the [module](/concepts/modules) that will provide messages to this route
- **processors**: (optional) array of [processors](/concepts/processors) that will be called in order and the result of the previous will be fed to the next processor.
  - if at any point the output of a processor is `nil` the entire route will be terminated (subject to change to support passing through `nil` values?)
  - an error in a processor step will result in the individual route being terminated