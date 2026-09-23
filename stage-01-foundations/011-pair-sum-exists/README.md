# Challenge 011 — Pair Sum Exists

## Difficulty

Beginner

## Problem

Given an array of numbers and a target sum, return `true` if two different values in the array can be added together to equal the target.

Return `false` if no pair exists.

## Function

```javascript
function pairSumExists(numbers, target) {

}
```

## Examples

```javascript
pairSumExists([2, 7, 11, 15], 9);
// true

pairSumExists([1, 2, 3, 4], 8);
// false

pairSumExists([3, 3], 6);
// true

pairSumExists([-2, 5, 8, 1], 3);
// true
```

## Requirements

- Return a boolean.
- The two numbers must come from two different positions in the array.
- Do not sort the array.
- Do not use nested loops.
- Practice using a JavaScript `Set`.

## Testing

Write tests using Vitest.

Try to cover:

- A pair that exists
- No matching pair
- Two identical values forming the target
- Negative numbers

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(n)

**Approach Used:** Created an empty Set and looped through the array. For each number, calculated the value needed to reach the target and checked whether it existed in the Set. If found, returned true. Otherwise, added the current number to the Set. Returned false if no pair was found.

**What I Found Difficult:** I initially used includes() inside a loop, which could result in O(n²) time complexity. I also struggled with using the current number correctly while looping.

**What I Would Do Differently Next Time:** Remember to check the Set before adding the current number so a number cannot match itself.