# Challenge 017 — Count Values Below Average

## Difficulty

Beginner

## Problem

Given an array of numbers, return how many values are strictly less than the average of the array.

Return `0` for an empty array.

Do not round the average.

## Function

```javascript
function countBelowAverage(numbers) {

}
```

## Examples

```javascript
countBelowAverage([1, 2, 3, 4, 5]);
// 2

countBelowAverage([10, 10, 10]);
// 0

countBelowAverage([-5, -3, -1]);
// 1

countBelowAverage([1, 2, 4]);
// 2

countBelowAverage([]);
// 0
```

## Requirements

- Return the number of values strictly below the average.
- Values equal to the average do not count.
- Do not round the average.
- Handle negative numbers.
- Return `0` for an empty array.
- Do not use `reduce()` or `filter()`.

## Testing

Write Vitest tests covering:

- Values both above and below the average
- Every value being equal to the average
- Negative numbers
- A decimal average
- An empty array

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Loop through the array once to calculate the total, use the total to calculate the average, then loop through the array again to count values below the average.

**What I Found Difficult:** Nothing significant on this challenge.

**What I Would Do Differently Next Time:** Make sure accumulator variables are initialized with a value before using them.