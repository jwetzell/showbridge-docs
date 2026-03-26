---
title: Database Query
sidebar:
    label: Query
    order: 1
---
The `db.query` processor will issue a query to the specified module and return the result to the next processor in line.

- **type**: `db.query`
- **params**:
    - **module**: the id of the [module](/concepts/modules) to issue query to.
    - **query**: the query to execute. 
### Example
Issue a `SELECT` statement to a module with id `sqlite`.
```
- type: db.query
  params:
    module: sqlite
    query: "SELECT * from users;"
```