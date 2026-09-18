# Challenge 007 — Find First Index

## Difficulty

Beginner

## Problem

Given an array of numbers and a target number, return the index of the first occurrence of the target.

If the target does not exist in the array, return `-1`.

## Function

```javascript
function findFirstIndex(numbers, target) {

}
```

## Examples

```javascript
findFirstIndex([4, 7, 2, 7, 9], 7);
// 1

findFirstIndex([1, 2, 3], 5);
// -1

findFirstIndex([8, 3, 6], 8);
// 0

findFirstIndex([-3, -1, -3], -3);
// 0
```

## Requirements

- Return the index of the first matching value.
- Return `-1` if the target is not found.
- If the target appears multiple times, return only the first index.
- Do not use `indexOf()`.
- Do not use `findIndex()`.

## Testing

Write tests using Vitest.

Try to cover:

- A target appearing multiple times
- A target that does not exist
- A target at index `0`
- Negative numbers

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Loop through the numbers and check each value against the target. Return the index immediately when a match is found, otherwise return -1 after the loop finishes.

**What I Found Difficult:** I originally put `return -1` inside the loop, which caused the function to stop too early.

**What I Would Do Differently Next Time:** Remember that the not-found return should go after the loop so every value has a chance to be checked.