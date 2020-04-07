---
layout: post
---

I implemented inversion using [***Gaussian elimination***](https://en.wikipedia.org/wiki/Gaussian_elimination), which I think is much easier than the determinant method used in the book. 

It brings back my old memory in College where I first learned matrix operations. Back then, most of us had no idea why Linear Algebra necessary for Computer Science. And I didn't pay too much attention to it other than trying to pass my exams. Luckily, I understood all basic concepts.

<h3>Input 4x4 Matrix</h3>
<textarea id="inputmatrix" rows="6" cols="50">
8, -5, 9, 2,
7, 5, 6, 1,
-6, 0, 9, 6,
-3, 0, -9, -4
</textarea>
<button type="button" onclick="Compute()">Compute</button>

<h3>Transpose:</h3>

<textarea id="transpose" rows="6" cols="50" readonly="true">

</textarea>

<h3>Inverse:</h3>

<textarea id="inversion" rows="6" cols="50" readonly="true">

</textarea>

<script src="{{ base.url | prepend: site.url }}/myasset/math.js"></script>
<script src="{{ base.url | prepend: site.url }}/myasset/libs/vector.js"></script>
<script src="{{ base.url | prepend: site.url }}/myasset/libs/color.js"></script>
<script src="{{ base.url | prepend: site.url }}/myasset/libs/render.js"></script>
<script src="{{ base.url | prepend: site.url }}/myasset/libs/matrix.js"></script>
<script src="{{ base.url | prepend: site.url }}/myasset/rt3.js"></script>
<script >
