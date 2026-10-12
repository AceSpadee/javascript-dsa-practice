# Challenge 033 — Longest Subarray Within Target

## Difficulty

Intermediate

## Problem

Given an array of positive numbers and a positive target, return the length of the longest consecutive group of values whose sum is less than or equal to the target.

Return `0` if no value can fit within the target.

## Examples

```javascript
longestSubarrayWithinTarget([2, 1, 5, 1, 3], 7);
// 3
// [1, 5, 1]

longestSubarrayWithinTarget([1, 2, 1, 1, 1], 4);
// 3

longestSubarrayWithinTarget([4, 2, 1, 1], 3);
// 2
// [1, 1]

longestSubarrayWithinTarget([8, 9], 5);
// 0

longestSubarrayWithinTarget([], 5);
// 0
```

## Requirements

- All values in the array are positive.
- Values in the group must be consecutive.
- Return the longest qualifying window length.
- The window sum must be less than or equal to `target`.
- Return `0` if no value can form a valid window.
- Do not use nested loops that restart from the beginning.
- Do not modify the original array.

## Testing Ideas

- Several valid window sizes.
- Window must shrink multiple times.
- No valid window.
- Single-value window.
- Empty array.
- Full array is valid.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Use a variable-size sliding window to find the longest consecutive group whose sum stays less than or equal to the target. Grow the window with the right pointer, shrink it from the left when the sum becomes too large, then measure the valid window.

**What I Found Difficult:** I still do not fully understand the logic and syntax of variable-size sliding windows. I used the previous challenge as a reference and still needed guidance.

**What I Would Do Differently Next Time:** Focus on understanding the grow, shrink, then measure order instead of only remembering the syntax.