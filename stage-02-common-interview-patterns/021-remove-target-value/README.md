# Challenge 021 — Remove Target Value

## Difficulty

Beginner+

## Problem

Given an array of numbers and a target value, remove every occurrence of the target from the array.

Modify the original array and return it.

The order of the remaining values must stay the same.

## Examples

```javascript
removeTarget([3, 2, 2, 3], 3);
// [2, 2]

removeTarget([0, 1, 2, 2, 3, 0, 4, 2], 2);
// [0, 1, 3, 0, 4]

removeTarget([1, 2, 3], 5);
// [1, 2, 3]

removeTarget([4, 4, 4], 4);
// []

removeTarget([], 2);
// []
```

## Requirements

- Modify the original array.
- Preserve the order of values that remain.
- Remove every occurrence of `target`.
- Return the modified array.
- Do not use `splice()`.
- Do not use `filter()`.
- Do not create another array containing the result.

## Testing Ideas

- Target appears multiple times.
- Target does not appear.
- Every value is the target.
- Target appears at the beginning and end.
- Empty array.
- Negative values.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Create an index outside the loop to track where the next value that does not match the target should be written. Loop through the array, move the values that should stay forward, and increment the tracking index each time one is kept.

**What I Found Difficult:** I got stuck at first and needed a small hint. I also still had to look back at previous two-index solutions to implement the pattern.

**What I Would Do Differently Next Time:** Try to work through the two-index pattern without looking back at old solutions before asking for help.