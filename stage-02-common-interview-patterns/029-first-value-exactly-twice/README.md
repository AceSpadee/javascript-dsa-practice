# Challenge 029 — First Value Appearing Exactly Twice

## Difficulty

Beginner+

## Problem

Given an array of numbers, return the first value in the original array that appears exactly twice.

If no value appears exactly twice, return `null`.

## Examples

```javascript
firstValueExactlyTwice([4, 2, 4, 2, 3]);
// 4

firstValueExactlyTwice([1, 2, 2, 3, 3]);
// 2

firstValueExactlyTwice([5, 5, 5, 2]);
// null

firstValueExactlyTwice([7, 8, 9]);
// null

firstValueExactlyTwice([-2, 1, -2, 3]);
// -2

firstValueExactlyTwice([]);
// null
```

## Requirements

- Return the first value in the original array whose total frequency is exactly `2`.
- Preserve the original array order when deciding which matching value comes first.
- A value appearing more than twice does not qualify.
- Return `null` if no value qualifies.
- Handle negative numbers.
- Do not use nested loops.
- Do not modify the original array.

## Testing Ideas

- Multiple values appear exactly twice.
- One value appears more than twice.
- No repeated values.
- Negative values.
- Empty array.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(n)

**Approach Used:** Use a frequency map to count how many times each value appears. Then loop through the original array again and return the first value whose stored count is exactly `2`.

**What I Found Difficult:** I understood the approach, but I needed some help with the exact syntax for checking the first matching value.

**What I Would Do Differently Next Time:** Loop through the original array a second time to preserve the original order instead of looping through the frequency object.