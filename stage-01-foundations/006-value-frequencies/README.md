# Challenge 006 — Count Value Frequencies

## Difficulty

Beginner

## Problem

Given an array of numbers, return an object showing how many times each number appears.

## Function

```javascript
function valueFrequencies(numbers) {

}
```

## Examples

```javascript
valueFrequencies([1, 2, 2, 3, 1, 1]);
// { 1: 3, 2: 2, 3: 1 }

valueFrequencies([5, 5, 5]);
// { 5: 3 }

valueFrequencies([1, 2, 3]);
// { 1: 1, 2: 1, 3: 1 }

valueFrequencies([]);
// {}
```

## Requirements

- Return an object.
- Each unique number should become a key.
- Each value should contain the number of times that number appeared.
- Return an empty object for an empty array.
- Do not use `reduce()`.

## Testing

Write tests using Vitest.

Try to cover:

- Multiple repeated values
- Every value being the same
- All unique values
- An empty array

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(n)

**Approach Used:** Loop through the array and check whether each number already exists as a key in the frequency object. If it does not exist, add it with a count of 1. Otherwise, increase its count by 1.

**What I Found Difficult:** I initially tried using dot notation for a dynamic object key and had trouble figuring out the best way to build the object while looping through the array.

**What I Would Do Differently Next Time:** Remember that dot notation works for known property names, but bracket notation is needed when the key comes from a variable or expression.