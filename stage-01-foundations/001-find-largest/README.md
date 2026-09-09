# Challenge 001 — Find the Largest Number

## Difficulty

Beginner

## Problem

Given a non-empty array of numbers, return the largest number in the array.

## Function

```javascript
function findLargest(numbers) {

}
```

## Examples

```javascript
findLargest([3, 8, 2, 10, 4]);
// 10

findLargest([-10, -3, -20]);
// -3

findLargest([7]);
// 7
```

## Requirements

- Return the largest number in the array.
- The array will always contain at least one number.
- Handle negative numbers correctly.
- Do not use `Math.max()`.
- Do not sort the array.

## Testing

Write tests for your solution using Vitest.

Try to cover at least:

- A normal array of positive numbers
- An array containing only negative numbers
- An array containing one number
- An array where the largest number appears more than once

Test-writing does not determine whether the DSA challenge passes. Ask for guidance if you get stuck on Vitest syntax.

## After Completing

Fill this section out after the challenge has passed.

**Time Complexity:** O(n)
**Space Complexity:** O(1)
**Approach Used:** Looped through the array, checked every value, and compared each value against the current highest value.
**What I Found Difficult:** I declared the highest value inside the loop, which caused it to reset on every iteration.
**What I Would Do Differently Next Time:** Store the highest value outside the loop so it can keep its value while the array is being checked.