# Challenge 019 — Move Zeroes

## Difficulty

Beginner+

## Problem

Given an array of numbers, move all `0` values to the end of the array while keeping the non-zero values in their original order.

Modify the original array and return it.

## Examples

```javascript
moveZeroes([0, 1, 0, 3, 12]);
// [1, 3, 12, 0, 0]

moveZeroes([0, 0, 1]);
// [1, 0, 0]

moveZeroes([1, 2, 3]);
// [1, 2, 3]

moveZeroes([0]);
// [0]

moveZeroes([]);
// []
```

## Requirements

- Modify the original array.
- Preserve the order of non-zero values.
- Return the modified array.
- Do not use `sort()`.
- Do not create another array containing all the reordered values.

## Testing Ideas

- Zeroes mixed with numbers.
- Multiple zeroes at the beginning.
- No zeroes.
- Only zeroes.
- Empty array.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Use one index to scan the array and another index to track where the next non-zero value should be placed. After moving all non-zero values toward the front, fill the remaining positions with zeroes.

**What I Found Difficult:** I understood how to solve it using `splice()`, but I struggled to find an O(n) solution without creating another array or removing values.

**What I Would Do Differently Next Time:** Try thinking about whether I can overwrite values in the original array instead of removing elements or creating a new array.