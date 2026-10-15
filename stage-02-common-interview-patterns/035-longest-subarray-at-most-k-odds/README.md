# Challenge 035 — Longest Subarray With At Most K Odd Numbers

## Difficulty

Intermediate

## Problem

Given an array of positive integers and a number `k`, return the length of the longest consecutive group containing at most `k` odd numbers.

## Examples

```javascript
longestSubarrayAtMostKOdds([1, 2, 3, 4, 5], 2);
// 4

longestSubarrayAtMostKOdds([2, 4, 6, 8], 1);
// 4

longestSubarrayAtMostKOdds([1, 3, 5, 2], 1);
// 2

longestSubarrayAtMostKOdds([1, 3, 5], 0);
// 0

longestSubarrayAtMostKOdds([], 2);
// 0
```

## Requirements

- Values in the group must be consecutive.
- The group may contain no more than `k` odd numbers.
- Return the longest valid group length.
- Return `0` when no valid group exists.
- Do not modify the original array.
- Do not use nested loops that restart from the beginning.

## Testing Ideas

- A normal mixed array.
- All even values.
- More odd values than allowed.
- `k` equal to `0`.
- Empty array.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Used a variable-size sliding window. The right pointer grows the window while tracking how many odd numbers are inside it. If the number of odd values becomes greater than `k`, the left pointer shrinks the window until it becomes valid again.

**What I Found Difficult:** I was not fully sure what the problem was asking at first. I needed help breaking the problem into a plan and still relied on previous sliding-window syntax.

**What I Would Do Differently Next Time:** Try to build the sliding-window structure from memory before looking at previous solutions.