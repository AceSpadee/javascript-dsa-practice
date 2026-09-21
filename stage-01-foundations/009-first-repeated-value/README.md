# Challenge 009 — Find First Repeated Value

## Difficulty

Beginner

## Problem

Given an array of numbers, return the first value that appears for a second time while reading the array from left to right.

If no value repeats, return `null`.

## Function

```javascript
function firstRepeatedValue(numbers) {

}
```

## Examples

```javascript
firstRepeatedValue([2, 5, 1, 2, 3, 5]);
// 2

firstRepeatedValue([1, 2, 3, 4]);
// null

firstRepeatedValue([7, 7]);
// 7

firstRepeatedValue([3, 1, 2, 1, 3]);
// 1
```

## Requirements

- Return the first value whose second occurrence is encountered.
- Return `null` if every value is unique.
- Do not sort the array.
- Do not use nested loops.

## Testing

Write tests using Vitest.

Try to cover:

- Multiple values that eventually repeat
- No repeated values
- Two identical values
- A case where a later value repeats before an earlier value repeats again

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(n)

**Approach Used:** Loop through the array and store each value in an object. If a value is already stored, return it because it is the first repeated value encountered.

**What I Found Difficult:** My first attempt only compared nearby values, so it would miss repeats that appeared later in the array.

**What I Would Do Differently Next Time:** If I need to detect values that may repeat later, store the values I have already seen so I can check against them during the loop.