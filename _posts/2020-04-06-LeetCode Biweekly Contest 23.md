---
layout: post
date: 2020-04-06 22:13:00
---

I spent some time on Sunday and finished this contest virually. Nothing too difficult.

---
[***1399. Count Largest Group***](https://leetcode.com/problems/count-largest-group/)
<br><strong>Easy</strong>. The input number has range <code>1 <= n <= 10^4</code>. Then we only have less than 40 groups. We can simply compute the group of each number belong to.

---
[***1400. Construct K Palindrome Strings***](https://leetcode.com/problems/construct-k-palindrome-strings/)
<br><strong>Medium</strong>. Given a string s and an integer k, return whether you can construct k palindrome strings using all the characters in s.

Again quite easy. We will not be able to construct k palindrome only if we have too many characters with old count. So we count the occurance of each character in s, and see if the old count is less than k.

There is also a corner case, which is length of s is less than k.

---
[***1401. Circle and Rectangle Overlapping***](https://leetcode.com/problems/circle-and-rectangle-overlapping/)
<br><strong>Medium</strong>. Annoying at first but fun when I figure out a good method.
<br>I don't know how everyone else is doing this, and there could be better ways. But my method is to partition the plane to nine parts using the rectangle.
<img src="{{ base.url | prepend: site.url }}/myasset/LeetCodeBiweeklyContest23/autodraw4_6_2020.png" width="460" height="345">
<br>If the center of circle falls in 1, 3, 7 or 9, compute whether the corner is inside the circle.
<br>If the center of circle falls in 2, 4, 6, or 8, computer whether center to edge is shorter than radius.
<br>If the center cor circle falls in 5, then yes, they are overlapping.

---
[***1402. Reducing Dishes***](https://leetcode.com/problems/reducing-dishes/)
<br><strong>Hard</strong>. Given an array, you are asked to select some numbers and form a new array N. Score is computed as Sum of i*N[i]. What is the max score?

I solved a version which is more difficult than this, because I though that you must present the dishes in that order. But either way, the problem is not difficult. Here I present the solution to the original problem.

<br>The key to this problem is that when you add a dish, you are adding the sum of the value of your current disk and all previous disk added. With this in mind, this problem is easy.

---
I did my virtual contest in a hurry so I don't have much thoughts on this one. 