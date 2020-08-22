---
layout: post
date: 2020-08-22 09:54:00
---

Hello?
<div id="AppCanvas"></div>
<script src="{{ base.url | prepend: site.url }}/myasset/RayTracing/01MovingBox/wasm_exec.js"></script>
<script>
            const go = new Go();
            WebAssembly.instantiateStreaming(fetch("{{ base.url | prepend: site.url }}/myasset/RayTracing/01MovingBox/rt.wasm"), go.importObject).then((result) => {
                go.run(result.instance);
            });
        </script>