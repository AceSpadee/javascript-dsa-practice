# Challenge 027 — Maximum Sum of K Consecutive Values

## Difficulty

Beginner+

## Problem

Given an array of numbers and a positive integer `k`, return the largest sum of any `k` consecutive values.

If `k` is greater than the length of the array, return `null`.

## Examples

```javascript
maxSumKConsecutive([2, 1, 5, 1, 3, 2], 3);
// 9
// 5 + 1 + 3

maxSumKConsecutive([2, 3, 4, 1, 5], 2);
// 7
// 3 + 4

maxSumKConsecutive([-2, -1, -3, -4], 2);
// -3

maxSumKConsecutive([5], 1);
// 5

maxSumKConsecutive([1, 2], 3);
// null
```

## Requirements

- Values must be consecutive.
- Return the largest sum of exactly `k` values.
- Return `null` if `k` is greater than the array length.
- Do not use nested loops.
- Do not use `slice()` inside a loop.
- Handle negative numbers.

## Testing Ideas

- Several possible windows.
- Negative numbers.
- `k` equal to `1`.
- `k` equal to the entire array length.
- `k` greater than the array length.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Use a sliding window of length `k`. Build the first window sum, then move the window across the array by adding the new value entering the window and subtracting the old value leaving it. Track the largest sum seen.

**What I Found Difficult:** I understood that sliding window was the right pattern, but I needed guidance to understand how to implement it, especially how `i - k` finds the value leaving the window.

**What I Would Do Differently Next Time:** Try to remember the sliding-window structure: build the first window, then add the entering value and subtract the leaving value each time the window moves.