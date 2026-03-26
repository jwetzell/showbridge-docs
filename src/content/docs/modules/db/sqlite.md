---
title: SQLite
sidebar:
    order: 1
---
The `db.sqlite` module can open/create SQLite databases 

- **type**: `db.sqlite`
- **params**:
    - **dsn**: the data source name, this can be a file path or the special `:memory:` name for an in-memory DB

## Cap

### Example snippet
Opens an in-memory SQLite database
```
- id: db
  type: db.sqlite
    params:
      dsn: ":memory:"
```