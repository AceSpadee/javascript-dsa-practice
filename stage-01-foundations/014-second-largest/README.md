
# Challenge 014 — Second Largest Number

## Difficulty

Beginner+

## Problem

Given an array of numbers, return the second largest **distinct** number.

If there are fewer than two distinct numbers, return `null`.

## Function

```javascript
function secondLargest(numbers) {

}
```

## Examples

```javascript
secondLargest([4, 8, 2, 10, 6]);
// 8

secondLargest([5, 5, 3, 2]);
// 3

secondLargest([-10, -3, -20, -5]);
// -5

secondLargest([7, 7, 7]);
// null

secondLargest([9]);
// null
```

## Requirements

- Return the second largest distinct number.
- Duplicate values should not count as separate largest numbers.
- Handle negative numbers.
- Return `null` if there are fewer than two distinct numbers.
- Return `null` for an empty array.
- Do not use `sort()`, `Math.max()`, or `Math.min()`.

## Testing

Write tests using Vitest covering:

- A normal array
- A duplicate largest number
- Negative numbers
- All identical numbers
- A single-value array
- An empty array

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Looped through the array to find the largest number, then looped through it again to find the second-largest distinct number.

**What I Found Difficult:** I initially compared second against largest instead of comparing the current number against largest. This allowed the largest number to be assigned to second.

**What I Would Do Differently Next Time:** Make sure my comparisons use the current value being checked during each iteration.
