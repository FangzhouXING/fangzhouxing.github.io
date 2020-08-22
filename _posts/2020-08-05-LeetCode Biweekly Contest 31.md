---
layout: post
date: 2020-08-05 18:43:00
---

Finally have time to do a lof of programming again. Spent some time today to finish this Contest. 

---
[***1523. Count Odd Numbers in an Interval Range***](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/)
<br><strong>Easy</strong>. Nothing talk about, need to be careful on corner cases.

---
[***1524. Number of Sub-arrays With Odd Sum***](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/)
<br><strong>Medium</strong>. The result can be build as we read the array from beginning to the end. 

We can count the even and odd locations in the processed numbers. When a odd number is added, the previous odd location between even and previous even location between odd. And the number of odd sub-arrays can be added accordingly.

---
[***1525. Number of Good Ways to Split a String***](https://leetcode.com/contest/biweekly-contest-31/problems/number-of-good-ways-to-split-a-string/)
<br><strong>Medium</strong>. Process the runes two times. For the first time, build map[rune]int, stores the number of times each rune appears in the string. This map will become right sub-string.

Now we will build the map for left sub-array. With each rune processed, we can count the type of rune in Left map and right map, so it's easy to determine whether the type counts are the same.

---
[***1526. Minimum Number of Increments on Subarrays to Form a Target Array***](https://leetcode.com/contest/biweekly-contest-31/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/)
<br><strong>Hard</strong>. This is marked as hard, but easy. We can imagine a water level, and numbers in the array is height. Water level rise and fall with the height. Each time the water level rise, an operation is needed. and each time the height fall, water level becomes lower with the height.