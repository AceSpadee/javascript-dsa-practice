# Challenge 023 — Pair Sum in Sorted Array

## Difficulty

Beginner+

## Problem

Given a **sorted** array of numbers and a target value, return `true` if two different values in the array add up to the target.

Return `false` if no pair exists.

## Examples

```javascript
pairSumSorted([1, 2, 3, 4, 6], 6);
// true

pairSumSorted([1, 2, 4, 7, 11], 10);
// false

pairSumSorted([-5, -2, 0, 3, 8], 1);
// true

pairSumSorted([2, 2, 3], 4);
// true

pairSumSorted([], 5);
// false
```

## Requirements

- The input array is already sorted from smallest to largest.
- Use two different positions in the array.
- Return `true` as soon as a valid pair is found.
- Return `false` if no pair exists.
- Do not use nested loops.
- Do not use `Set`.
- Do not use `includes()`.

## Testing Ideas

- Pair exists.
- No pair exists.
- Negative values.
- Duplicate values.
- Empty array.
- Single value.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Add the leftmost and rightmost values. If the sum is less than the target, move the left pointer forward. If the sum is greater than the target, move the right pointer backward. Return true if the sum matches the target.

**What I Found Difficult:** I found an O(n²) approach first, but I needed guidance to understand how to use two pointers to make the solution O(n).

**What I Would Do Differently Next Time:** Practice recognizing when a sorted array can be solved using two pointers from opposite ends.