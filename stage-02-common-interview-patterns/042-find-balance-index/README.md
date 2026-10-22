# Challenge 042 — Find Balance Index

## Difficulty

Intermediate

## Problem

Given an array of numbers, return the first index where the sum of all values to the left of that index equals the sum of all values to the right.

The value at the balance index itself is not included in either sum.

Return `-1` if no balance index exists.

## Examples

```javascript
findBalanceIndex([1, 7, 3, 6, 5, 6]);
// 3

// left:  1 + 7 + 3 = 11
// right: 5 + 6 = 11
```

```javascript
findBalanceIndex([1, 2, 3]);
// -1
```

```javascript
findBalanceIndex([2, 1, -1]);
// 0

// nothing to the left = 0
// 1 + -1 = 0
```

```javascript
findBalanceIndex([]);
// -1
```

## Requirements

- Return the first valid balance index.
- Do not include the current index's value in either side.
- An empty side has a sum of `0`.
- Return `-1` if no balance index exists.
- Do not modify the original array.
- Avoid recalculating the left and right sums from scratch for every index.

## Testing Ideas

- Balance index in the middle.
- No balance index.
- Balance index at the beginning.
- Empty array.
- Multiple possible balance indexes.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(n)

**Approach Used:** Used a prefix sum array to get the running totals, then looped through the array and compared the sum before each index against the sum after it.

**What I Found Difficult:** I needed guidance to figure out how to calculate the left and right sums efficiently, and I still had to look at previous prefix-sum syntax.

**What I Would Do Differently Next Time:** Try to work out the left-side and right-side relationship before looking at an older solution.