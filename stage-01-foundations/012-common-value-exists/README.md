# Challenge 012 — Common Value Exists

## Difficulty
Beginner

## Problem
Given two arrays of numbers, return `true` if at least one value appears in both arrays. Otherwise, return `false`.

## Function
```javascript
function commonValueExists(numbers1, numbers2) {

}
```

## Examples
```javascript
commonValueExists([1, 2, 3], [4, 5, 2]);
// true

commonValueExists([1, 2, 3], [4, 5, 6]);
// false

commonValueExists([-3, -1, 2], [5, -1, 8]);
// true

commonValueExists([], [1, 2, 3]);
// false
```

## Requirements
- Return a boolean.
- Return `true` as soon as a shared value is found.
- Return `false` when no shared values exist.
- Handle empty arrays.
- Do not use nested loops or `includes()`.
- Practice using a JavaScript `Set`.

## Testing
Write Vitest tests covering:
- At least one shared value
- No shared values
- Shared negative values
- An empty array

## After Completing
**Time Complexity:** O(n + m)

**Space Complexity:** O(n)

**Approach Used:** Created a Set from the first array, then looped through the second array using `.has()` to check whether any values appeared in both arrays.

**What I Found Difficult:** Nothing significant. I'm still getting more practice using Sets.

**What I Would Do Differently Next Time:** I would use the same approach since it worked well for this problem.