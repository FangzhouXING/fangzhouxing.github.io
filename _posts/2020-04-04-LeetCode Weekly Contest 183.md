---
layout: post
---

Attended LeetCode Weekly Contest 183. Sharing my solutions here.
<br>

---
[***1403. Minimum Subsequence in Non-Increasing Order***](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/)
<br><b>Easy</b> Given an array, need to find a "subsequence" of number whose sum is larger than the sum not included in the "subsequence".

Since the result should be sorted to increasing, we are looking for a subset of number in the array instead of subsequence. This makes the problem a lot easier. Just calculate the sum of all the number in the input array, sort the array to decreasing order, then start to sum the sorted array from the beginning. Whenever the running sum is larger than remaining, output the result.

---
[***1404. Number of Steps to Reduce a Number in Binary Representation to One***](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/)
<br><b>Medium</b> Given a string of 1s and 0s, which represents a larger number, apply two types of operation and reduce the number to 1, count the number of operation necessary.
{% highlight javascript %}
1. divide the number by 2. (remove 0 from end)
2. plus the number by 1. 
{% endhighlight %}

Given the input size, <code>1 <= s.length <= 500</code>, this problem can be easily solved by brute force. 

Start from the end of the string, 
{% highlight cpp %}
if(s[i] == '0') {
    step++;
} else { // s[i] == '1'
    step++;//for adding 1 to the number;
    while(condition) {
        //modify string to reflect addition
    }
}
{% endhighlight %}
Although this is brute force, the complexity is still O(n), so I don't see a room for large improvements.

---
[***1405. Longest Happy String***](https://leetcode.com/problems/longest-happy-string/)
<br><b>Medium</b> We are given three number, representing the maximum number of 'a', 'b', 'c' characters we can use to form a string. And the result string cannot contain "aaa", "bbb", or "ccc".

This is a interesting problem. My line of thinking contains two small parts.

1. what's the maximum length of the result string.
<br>2. how to form it.

The three number feels like three edges of a triangle, where the sum of the two shorter edges determines the longest edge. 
<br>If we represent the three number as L, M, S, where L is the largest input number, M is the medium, and S is the smallest, it's easy to derive L'(max allowed count) from M and S. <code> 2 * (M+S) + 2 -> L'</code>

After this we are ready to form the string, which seems difficult at first glance. Once we start to form the string and reduce corresponding count from a, b, c, there are too many variations. But this issue can be solved very easily by calculating which is L, M, and S eveytime we output a round of character. 
<br>And in Each output round, we do this:
{% highlight cpp %}
if(L > M) {
    res += charL;
    L--;
}
if(L > 0) {
    res += L;
    L--;
}
if(M > 0) {
    res += charM;
    M--;
}
calculateLMS();
{% endhighlight %}
In simple word, each round we output 'charL' and 'charM', if L > M, we output an extra 'charL' in front. Notice we don't need to output 'charS', because as we output, 'charM' and 'charS' will swap.

---
[***1406. Stone Game III***](https://leetcode.com/problems/stone-game-iii/)
<br><b>Hard</b> Alice and Bob are playing a game. Give an array of number, each of them can take either 1, 2, or 3 numbers from the head of the array. The one with larger sum wins. If both of them play optimally, who will win?

I finished this problem 10 mins after then end of contest 183 due to a bug. But the idea is simple, just a DP algorithm with small twist.

Firstly there is an assumption that I want to point out. The sum of all numbers in the array is fixed. When the sum of Alice's number increases, the sum of Bob's number decreases.
<br>When Alice pick, she has three options. When she picked what's best for her, it will be Bob's turn to pick what's best for him. So the best Alice can do is 
<br><code>sum of picked number(1,2 or 3) + (Sum of remaining array - Best of Bob starting from remaining array)<code>

Since Alice and Bob both play optimal, given same array, the best way for Alice to pick is exactly the same way Bob would pick. So we only need to calculate the MaxPick array once.

After this, we compare whether MaxPick[0] is larger than MaxPick[1],[2],[3]. This is because Alice move first and she has three ways of picking. If MaxPick[0] is larger than any of them Alice would win. If there is at least a Tie, then the whole game ties. Otherwise, Bob wins.

---
<br>
<H4>Thoughts</H4>
The 4 problems in Contest 183 is easier than I thought, but they are fun, especially 3 and 4. You can feel that the small twists are carefully designed. Hope I can debug faster next time.