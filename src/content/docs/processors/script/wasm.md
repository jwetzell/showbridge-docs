---
title: Run WASM (Extism) Plugin
sidebar:
    label: WASM
    order: 3
---
This processor will load and execute a WASM plugin using the [Extism](https://extism.org/) runtime. The processor will execute the specified function in the WASM plugin and return the result as the new payload. This processor will return an error if the plugin cannot be loaded, if the function cannot be executed, or if there is an error during execution. The incoming payload will be passed as the argument to the WASM function. If the plugin is successfully executed, the result of the function will be returned as the new payload.

- **type**: `script.wasm`
- **params**:
    - **path**: the path to the WASM plugin to load. 
    - **function**: (optional) the function to execute in the WASM plugin defaults to `process`
    - **enableWasi**: (optional) whether to enable WASI for the plugin defaults to `false`

### Example
This example will load the plugin at `./test.wasm` and execute the `test` function
```
- type: script.wasm
  params:
    path: "./test.wasm"
    function: "test"
```