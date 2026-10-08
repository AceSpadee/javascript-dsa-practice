# Challenge 025 — Squares of a Sorted Array

## Difficulty

Beginner+

## Problem

Given an array of integers sorted from smallest to largest, return a new array containing the square of each number.

The returned array must also be sorted from smallest to largest.

## Examples

```javascript
sortedSquares([-4, -1, 0, 3, 10]);
// [0, 1, 9, 16, 100]

sortedSquares([-7, -3, 2, 3, 11]);
// [4, 9, 9, 49, 121]

sortedSquares([0, 1, 2]);
// [0, 1, 4]

sortedSquares([-3, -2, -1]);
// [1, 4, 9]

sortedSquares([]);
// []
```

## Requirements

- The input array is already sorted.
- Return a new array containing the squared values.
- The returned array must be sorted in ascending order.
- Do not use `sort()`.
- Do not use nested loops.
- Do not modify the original array.

## Testing Ideas

- Mixed positive and negative values.
- All positive values.
- All negative values.
- Duplicate squared values.
- Empty array.
- Single value.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(n)

**Approach Used:** Use two pointers at the left and right ends of the sorted array. Compare the squared values at both pointers, place the larger square at the end of a new array, then move the pointer that was used.

**What I Found Difficult:** I struggled to come up with an O(n) approach instead of an O(n²) solution and needed guidance to work through the two-pointer implementation.

**What I Would Do Differently Next Time:** Look for a way to use the sorted order and two pointers before considering a nested-loop approach.