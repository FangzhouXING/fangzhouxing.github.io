---
layout: post
date: 2020-08-22 09:54:00
---

A moving box with Golang + WebAssembly.

It is running at roughly 60 fps on Chrome. Writting code in Go is indeed a much better experience than JS, at the cost of performance. 

One would imagine that writting webassembly would be much faster than JS code, but in reality it's more complicated.
Drawing in JS is all GPU accelerated, so setting pixels to white and drawing shapes are much faster than doing so using CPU.
Plus, there are 3 extra copies needed for each frame between JS and GO.

I could have used OpenGL with Golang. But that defeat the purpose of this project, which is wrtting a Ray Tracer.
For now, I am stuck with manual pixel cleanning and less than ideal performance.

But hey, it is working.
<div id="AppCanvas"></div>
<script src="{{ base.url | prepend: site.url }}/myasset/RayTracing/01MovingBox/wasm_exec.js"></script>
<script>
            const go = new Go();
            WebAssembly.instantiateStreaming(fetch("{{ base.url | prepend: site.url }}/myasset/RayTracing/01MovingBox/rt.wasm"), go.importObject).then((result) => {
                go.run(result.instance);
            });
        </script>