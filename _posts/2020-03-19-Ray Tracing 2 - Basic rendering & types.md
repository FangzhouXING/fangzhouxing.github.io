---
layout: post
---
<a id="XSpeedText">X:50</a>
<input id="xspeed" type="range" min="1" max="100" value="50" oninput="xSlider()">
<br>
<a id="YSpeedText">Y:50</a>
<input id="yspeed" type="range" min="1" max="100" value="50" oninput="ySlider()">
<br>
<button type="button" onclick="BeginButton()">Begin</button>
<button type="button" onclick="PauseButton()">Pause</button>
<canvas id="RTScene" width="640" height="480"></canvas>
<p>Implemented some basic types and render infrastructure, preparing for future dev.</p>
<p>Once stopped, refresh is required to render again. Not sure if this needs to change.</p>

<script src="{{ base.url | prepend: site.url }}/myasset/math.js"></script>
<script src="{{ base.url | prepend: site.url }}/myasset/libs/vector.js"></script>
<script src="{{ base.url | prepend: site.url }}/myasset/libs/color.js"></script>
<script src="{{ base.url | prepend: site.url }}/myasset/libs/render.js"></script>
<script src="{{ base.url | prepend: site.url }}/myasset/rt2.js"></script>
