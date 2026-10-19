# Challenge 039 — Longest Subarray With At Most K Even Numbers

## Difficulty

Intermediate

## Problem

Given an array of positive integers and a number `k`, return the length of the longest consecutive group containing at most `k` even numbers.

## Examples

```javascript
longestSubarrayAtMostKEvens([1, 2, 3, 4, 5], 2);
// 5

longestSubarrayAtMostKEvens([2, 4, 1, 3, 5], 1);
// 4

longestSubarrayAtMostKEvens([2, 4, 6], 1);
// 1

longestSubarrayAtMostKEvens([1, 3, 5], 0);
// 3

longestSubarrayAtMostKEvens([], 2);
// 0
```

## Requirements

- Values must be consecutive.
- The window may contain at most `k` even numbers.
- Return the longest valid window length.
- Return `0` for an empty array.
- Do not modify the original array.
- Do not use nested loops that restart from the beginning.

## Testing Ideas

- Mixed odd and even values.
- More even values than allowed.
- `k` equal to `0`.
- No even values.
- Empty array.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Used a variable-size sliding window to find the longest consecutive group containing at most `k` even numbers.

**What I Found Difficult:** I still relied on syntax from an older sliding-window solution, even though I understood how this problem needed to be solved.

**What I Would Do Differently Next Time:** Try to build the sliding-window structure with less reference to previous solutions.