# Challenge 022 — Reverse Array In Place

## Difficulty

Beginner+

## Problem

Given an array of values, reverse the order of the array.

Modify the original array and return it.

## Examples

```javascript
reverseArray([1, 2, 3, 4]);
// [4, 3, 2, 1]

reverseArray([1, 2, 3, 4, 5]);
// [5, 4, 3, 2, 1]

reverseArray([7]);
// [7]

reverseArray([]);
// []

reverseArray([-1, 0, 3]);
// [3, 0, -1]
```

## Requirements

- Modify the original array.
- Return the modified array.
- Do not use `reverse()`.
- Do not create another array containing the reversed result.
- Do not use `unshift()` or `splice()`.

## Testing Ideas

- Even number of values.
- Odd number of values.
- Single value.
- Empty array.
- Negative numbers.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Loop through half of the array and swap each value with the matching value from the opposite end.

**What I Found Difficult:** I came up with the correct plan for reversing the array, but I had to look up how to implement the swapping logic.

**What I Would Do Differently Next Time:** Try to implement the swap without looking it up.