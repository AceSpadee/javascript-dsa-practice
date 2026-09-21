# Challenge 008 — Find the Smallest Number

## Difficulty

Beginner

## Problem

Given a non-empty array of numbers, return the smallest number in the array.

## Function

```javascript
function findSmallest(numbers) {

}
```

## Examples

```javascript
findSmallest([8, 3, 10, 2, 7]);
// 2

findSmallest([-4, -10, -2, -7]);
// -10

findSmallest([5]);
// 5

findSmallest([3, 1, 1, 4]);
// 1
```

## Requirements

- Return the smallest number in the array.
- The array will always contain at least one number.
- Handle negative numbers correctly.
- Do not use `Math.min()`.
- Do not sort the array.

## Testing

Write tests using Vitest.

Try to cover:

- Positive numbers
- Negative numbers
- A single-value array
- The smallest value appearing more than once

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Loop through the array and update the stored smallest value whenever a smaller number is found.

**What I Found Difficult:** Nothing significant on this challenge.

**What I Would Do Differently Next Time:** Remember to loop through the array and keep track of the smallest value found so far.