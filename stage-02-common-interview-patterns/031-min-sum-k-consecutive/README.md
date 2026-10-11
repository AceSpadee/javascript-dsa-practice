# Challenge 031 — Minimum Sum of K Consecutive Values

## Difficulty

Beginner+

## Problem

Given an array of numbers and a positive integer `k`, return the smallest sum of any group of exactly `k` consecutive values.

If `k` is greater than the length of the array, return `null`.

## Examples

```javascript
minSumKConsecutive([2, 1, 5, 1, 3, 2], 3);
// 6

minSumKConsecutive([4, 2, 1, 7, 8], 2);
// 3

minSumKConsecutive([-2, -1, -3, -4], 2);
// -7

minSumKConsecutive([5], 1);
// 5

minSumKConsecutive([1, 2], 3);
// null
```

## Requirements

- Each window must contain exactly `k` consecutive values.
- Return the smallest window sum.
- Return `null` if `k` is greater than the array length.
- Do not use nested loops.
- Do not use `slice()` inside a loop.
- Do not modify the original array.

## Testing Ideas

- Several possible windows.
- Negative numbers.
- `k` equal to `1`.
- `k` equal to the full array length.
- `k` greater than the array length.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Use a sliding window of length `k` to track the current sum and update the smallest sum found as the window moves across the array.

**What I Found Difficult:** I remembered the sliding-window syntax and understood what it was doing, but some of the indexing still takes a little effort to follow.

**What I Would Do Differently Next Time:** I would use the same approach again. I don’t think I would change much.