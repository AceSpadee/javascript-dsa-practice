# Challenge 010 — Intersection of Two Arrays

## Difficulty

Beginner

## Problem

Given two arrays of numbers, return a new array containing the unique values that appear in both arrays.

Keep the values in the order they first appear in the first array.

## Function

```javascript
function arrayIntersection(numbers1, numbers2) {

}
```

## Examples

```javascript
arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]);
// [3, 4]

arrayIntersection([1, 2, 2, 3], [2, 3, 3]);
// [2, 3]

arrayIntersection([1, 2], [3, 4]);
// []

arrayIntersection([-1, 2, -3], [-3, -1, 5]);
// [-1, -3]
```

## Requirements

- Return a new array.
- Only include values that appear in both arrays.
- Each returned value should appear only once.
- Preserve the order from the first array.
- Do not use nested loops.
- Practice using a JavaScript `Set`.

## Testing

Write tests using Vitest.

Try to cover:

- Multiple shared values
- Duplicate shared values
- No shared values
- Negative numbers

## After Completing

**Time Complexity:** O(n + m)

**Space Complexity:** O(n + m)

**Approach Used:** Create a Set from numbers2, then loop through numbers1. Check whether each value exists in numbers2 and use another Set to make sure the same value is not added to the result more than once.

**What I Found Difficult:** I do not fully understand Sets yet, so most of the Set logic was confusing. My failed attempts did not correctly prevent repeated values from being added to the returned array.

**What I Would Do Differently Next Time:** I am starting to remember more of the Set methods and logic, but I still need more practice using `.has()` and `.add()` and understanding what each Set is being used for.