# Challenge 002 — Count Target Values

## Difficulty

Beginner

## Problem

Given an array of numbers and a target number, return how many times the target appears in the array.

## Function

```javascript
function countTarget(numbers, target) {

}
```

## Examples

```javascript
countTarget([1, 2, 3, 2, 4, 2], 2);
// 3

countTarget([5, 5, 5], 5);
// 3

countTarget([1, 2, 3], 7);
// 0

countTarget([-1, -2, -1, 3], -1);
// 2
```

## Requirements

- Return the number of times `target` appears.
- Return `0` if the target does not appear.
- The array may contain negative numbers.
- Do not use `filter()`.

## Testing

Write tests using Vitest.

Try to cover:

- A target that appears multiple times
- A target that does not appear
- A target that is the only value in the array
- Negative numbers

## After Completing

**Time Complexity:** O(n)
**Space Complexity:** O(1)
**Approach Used:** Loop through the array and increase the count for every value that matches the target.
**What I Found Difficult:** Nothing significant on this challenge.
**What I Would Do Differently Next Time:** I would use the same counting approach and initialize the counter to 0 before looping.