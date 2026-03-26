---
title: Regex Filter
sidebar:
    label: Regex
    order: 1
---
The `filter.regex` processor matches incoming string payload against a regular expression. If there is a match then the payload is sent through. This processor will return an error if the message being processed is not a string.

- **type**: `filter.regex`
- **params**:
    - **pattern**: regex pattern to match against the incoming string

### Example
Match strings starting with `hello`
```
- type: filter.regex
  params:
    pattern: "^hello.*"
```