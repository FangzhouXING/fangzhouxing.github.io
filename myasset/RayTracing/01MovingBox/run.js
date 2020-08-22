const go = new Go();
WebAssembly.instantiateStreaming(fetch("rt.wasm"), go.importObject).then((result) => {
    go.run(result.instance);
});