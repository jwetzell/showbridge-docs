---
title: Expr Filter
sidebar:
    label: Expr
    order: 2
---
The `filter.expr` processor evaluates an [Expr expression](https://expr-lang.org/playground). If the expression evaluates to true then the payload is sent through. This processor will return an error if the expression fails to evaluate.

- **type**: `filter.expr`
- **params**:
    - **expression**: [Expr expression](https://expr-lang.org/playground) to evaluate. The expression has access to the [wrapped payload](/concepts/payload).

### Example
Match a payload great than or equal to 0
```yaml
- type: filter.expr
  params:
    pattern: "Payload >= 0"
```