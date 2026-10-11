# Challenge 030 — Count Windows Meeting Target

## Difficulty

Beginner+

## Problem

Given an array of numbers, a positive integer `k`, and a target, return how many groups of exactly `k` consecutive values have a sum greater than or equal to the target.

If `k` is greater than the array length, return `0`.

## Examples

```javascript
countWindowsMeetingTarget([2, 1, 5, 1, 3, 2], 3, 8);
// 2

// Windows:
// [2, 1, 5] = 8  → counts
// [1, 5, 1] = 7
// [5, 1, 3] = 9  → counts
// [1, 3, 2] = 6

countWindowsMeetingTarget([1, 2, 3, 4], 2, 5);
// 2

countWindowsMeetingTarget([-2, 4, 1, 3], 2, 2);
// 3

countWindowsMeetingTarget([5], 1, 5);
// 1

countWindowsMeetingTarget([1, 2], 3, 2);
// 0
```

## Requirements

- Each window must contain exactly `k` consecutive values.
- Count windows whose sum is greater than or equal to `target`.
- Return `0` if `k` is greater than the array length.
- Do not use nested loops.
- Do not use `slice()` inside a loop.
- Do not modify the original array.

## Testing Ideas

- Several qualifying windows.
- No qualifying windows.
- Negative values.
- `k` equal to `1`.
- `k` equal to the full array length.
- `k` greater than the array length.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Use a sliding window of length `k`. Calculate the first window sum and check whether it meets the target. Then slide the window by subtracting the value leaving and adding the value entering, increasing the count whenever the new sum is greater than or equal to the target.

**What I Found Difficult:** I knew sliding window was the correct pattern, but I still needed to look at previous solutions to remember the implementation syntax.

**What I Would Do Differently Next Time:** Try writing the sliding-window structure from memory before looking back at previous challenges.