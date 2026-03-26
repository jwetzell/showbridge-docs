---
title: Execute Expr Expression
tableOfContents: false
sidebar:
    label: Expr
    order: 2
---
The processor will execute the provided Expr expression and return the result as the new payload. This processor will return an error if the expression cannot be executed or if there is an error during execution. The expression will have access to the [wrapped payload](/concepts/payloads).
- **type**: `script.expr`
- **params**:
    - **expression**: the Expr expressiont to execute.

### Example
This example will add 1 to the wrapped payload.
```
- type: script.expr
  params:
    expression: "Payload + 1"
```