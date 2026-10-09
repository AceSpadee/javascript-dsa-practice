# Challenge 026 — Merge Two Sorted Arrays

## Difficulty

Beginner+

## Problem

Given two arrays of numbers that are each already sorted from smallest to largest, return a new array containing all values from both arrays in sorted order.

## Examples

```javascript
mergeSortedArrays([1, 3, 5], [2, 4, 6]);
// [1, 2, 3, 4, 5, 6]

mergeSortedArrays([1, 2, 7], [3, 4]);
// [1, 2, 3, 4, 7]

mergeSortedArrays([], [1, 2, 3]);
// [1, 2, 3]

mergeSortedArrays([1, 2], []);
// [1, 2]

mergeSortedArrays([1, 2, 2], [2, 3]);
// [1, 2, 2, 2, 3]
```

## Requirements

- Both input arrays are already sorted.
- Return a new sorted array containing all values.
- Preserve duplicate values.
- Do not use `sort()`.
- Do not use nested loops.
- Do not modify either input array.

## Testing Ideas

- Arrays of equal length.
- Arrays of different lengths.
- One empty array.
- Both empty arrays.
- Duplicate values.
- Negative values.

## After Completing

**Time Complexity:** O(n + m)

**Space Complexity:** O(n + m)

**Approach Used:** Use one index for each sorted array. Compare the current values from both arrays, add the smaller value to the new array, and move only the index from the array that was used. After one array runs out, add the remaining values from the other array.

**What I Found Difficult:** I first thought of an O(n²) solution using nested loops and needed help recognizing how to merge both arrays in O(n + m) time.

**What I Would Do Differently Next Time:** Try using one index for each sorted array and move through both arrays at the same time instead of comparing every value against every other value.