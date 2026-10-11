# Challenge 032 — Smallest Subarray Meeting Target

## Difficulty

Intermediate

## Problem

Given an array of **positive numbers** and a positive target, return the length of the smallest consecutive group of values whose sum is greater than or equal to the target.

Return `0` if no consecutive group reaches the target.

## Examples

```javascript
smallestSubarrayTarget([2, 1, 5, 2, 3, 2], 7);
// 2
// [5, 2]

smallestSubarrayTarget([2, 1, 5, 2, 8], 7);
// 1
// [8]

smallestSubarrayTarget([3, 4, 1, 1, 6], 8);
// 3

smallestSubarrayTarget([1, 1, 1, 1], 10);
// 0

smallestSubarrayTarget([], 5);
// 0
```

## Requirements

- All values in the array are positive.
- Values in the group must be consecutive.
- Return the smallest qualifying window length.
- Return `0` if no window reaches the target.
- Do not use `slice()` to repeatedly calculate window sums.
- Do not modify the original array.

## Testing Ideas

- Several qualifying windows.
- A single value reaches the target.
- No qualifying window.
- Empty array.
- The full array is the smallest qualifying window.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Use a variable-size sliding window. Move the right pointer forward to grow the window and add values to the current sum. When the sum reaches the target, shrink the window from the left while tracking the smallest valid window length.

**What I Found Difficult:** I did not know how to plan the variable-size sliding-window solution at first. Once the approach was explained, I was able to roughly implement it.

**What I Would Do Differently Next Time:** Try to remember the variable-window plan: grow with the right pointer, then shrink from the left while the window is valid.