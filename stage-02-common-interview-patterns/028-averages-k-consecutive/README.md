# Challenge 028 — Averages of K Consecutive Values

## Difficulty

Beginner+

## Problem

Given an array of numbers and a positive integer `k`, return an array containing the average of every group of `k` consecutive values.

If `k` is greater than the length of the array, return an empty array.

## Examples

```javascript
averageKConsecutive([1, 2, 3, 4, 5], 3);
// [2, 3, 4]

averageKConsecutive([2, 4, 6, 8], 2);
// [3, 5, 7]

averageKConsecutive([-2, 0, 2, 4], 2);
// [-1, 1, 3]

averageKConsecutive([5], 1);
// [5]

averageKConsecutive([1, 2], 3);
// []
```

## Requirements

- Each result represents exactly `k` consecutive values.
- Return the averages in the order the windows appear.
- Return `[]` if `k` is greater than the array length.
- Do not use nested loops.
- Do not use `slice()` inside a loop.
- Do not modify the original array.

## Testing Ideas

- Several windows.
- Negative numbers.
- `k` equal to `1`.
- `k` equal to the entire array.
- `k` greater than the array length.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(n)

**Approach Used:** Use a sliding window of length `k`. Build the first window sum, save its average, then move the window by subtracting the value leaving and adding the value entering. Add each new window average to the result array.

**What I Found Difficult:** I understood the sliding-window logic, but I still looked back at the previous challenge for the implementation syntax.

**What I Would Do Differently Next Time:** Try to write the sliding-window structure from memory before checking an older solution.