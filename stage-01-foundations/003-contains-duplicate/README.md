# Challenge 003 — Contains Duplicate

## Difficulty

Beginner

## Problem

Given an array of numbers, return `true` if any number appears more than once.

Return `false` if every number is unique.

## Function

```javascript
function containsDuplicate(numbers) {

}
```

## Examples

```javascript
containsDuplicate([1, 2, 3, 1]);
// true

containsDuplicate([1, 2, 3, 4]);
// false

containsDuplicate([5, 5]);
// true

containsDuplicate([-1, -2, -3]);
// false
```

## Requirements

- Return a boolean.
- Return `true` when at least one duplicate exists.
- Return `false` when all values are unique.
- Do not sort the array.
- Practice using a JavaScript `Set`.

## Testing

Write tests using Vitest.

Try to cover:

- An array containing a duplicate
- An array with all unique values
- Two identical values
- Negative values with no duplicates

## After Completing

**Time Complexity:** O(n)
**Space Complexity:** O(n)
**Approach Used:** Created a Set from the array and compared the Set size to the array length to check for duplicates.
**What I Found Difficult:** I had the return values backwards and did not remember that Sets use `.size` instead of `.length`.
**What I Would Do Differently Next Time:** Remember that a Set only stores unique values and uses `.size`.