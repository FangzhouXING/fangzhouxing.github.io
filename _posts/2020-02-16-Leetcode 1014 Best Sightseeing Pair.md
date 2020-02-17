---
layout: post
---

I found this one perticularly interesting. It opened my mind. 

---
[***Problem 1014 best sightseeing pair***](https://leetcode.com/problems/best-sightseeing-pair/)

Given an array A of positive integers, A[i] represents the value of the i-th sightseeing spot, and two sightseeing spots i and j have distance j - i between them.

The score of a pair (i < j) of sightseeing spots is (A[i] + A[j] + i - j) : the sum of the values of the sightseeing spots, minus the distance between them.

Return the maximum score of a pair of sightseeing spots.

```
Example 1:

Input: [8,1,5,2,6]
Output: 11
Explanation: i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11
```
---

In essense, one is required to find two max values with shortest distance.

At first, I was trying to find the pair of values at the same time. To do that, I considered Brute Force(too slow) and DP. 
But the best solution is difficult to come up with.

The result is A[i] + A[j] + i - j, which could be divided into A[i] + i + A[j] - j.
Then we can comput A[i] + i and A[j] - j separately.

So one just need to compute two arrays: A[i] + i array and A[j] - j array. Then select two values i, j where i < j.

All above could be computed in one simple pass.


It never occurred to me that one might be able to find a optimal pair of values individually.