# Challenge 005 — Remove Duplicate Values

## Difficulty

Beginner

## Problem

Given an array of numbers, return a new array containing each value only once.

Keep the values in the order they first appeared.

## Function

```javascript
function removeDuplicates(numbers) {

}
```

## Examples

```javascript
removeDuplicates([1, 2, 2, 3, 1, 4]);
// [1, 2, 3, 4]

removeDuplicates([5, 5, 5]);
// [5]

removeDuplicates([1, 2, 3]);
// [1, 2, 3]

removeDuplicates([-1, -1, 2, -3, 2]);
// [-1, 2, -3]
```

## Requirements

- Return a new array.
- Each value should appear only once.
- Preserve the order of the first occurrence.
- Do not sort the array.
- Practice using a JavaScript `Set`.
- Do not solve the challenge with `[...new Set(numbers)]`.

## Testing

Write tests using Vitest.

Try to cover:

- Multiple duplicates
- Every value being the same
- No duplicates
- Negative numbers mixed with duplicates

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(n)

**Approach Used:** Loop through the numbers, add values that have not been seen to the Set and the new array, then return the new array.

**What I Found Difficult:** I had to look up how to use Sets and how to iterate over them. My failed attempts came from letting the Set remove duplicates for me instead of using it to check each value.

**What I Would Do Differently Next Time:** Remember that Sets store unique values, are not accessed by index like arrays, and can use `.has()` and `.add()` while looping through the original array.