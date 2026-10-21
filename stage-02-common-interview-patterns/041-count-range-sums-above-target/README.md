# Challenge 041 — Count Range Sums Above Target

## Difficulty

Intermediate

## Problem

Given an array of numbers, an array of range queries, and a target value, return how many query ranges have a sum greater than or equal to the target.

Each query contains:

```javascript
[start, end]
```

Both indexes are inclusive.

## Examples

```javascript
countRangeSumsAboveTarget(
  [2, 4, 1, 5, 3],
  [[0, 2], [1, 3], [2, 4]],
  9
);
// 2
```

Because the range sums are:

```text
[0, 2] → 7
[1, 3] → 10
[2, 4] → 9
```

So two ranges are greater than or equal to `9`.

```javascript
countRangeSumsAboveTarget(
  [5, 10, 15],
  [[0, 0], [0, 2], [1, 2]],
  20
);
// 2
```

```javascript
countRangeSumsAboveTarget([], [], 5);
// 0
```

## Requirements

- Each query is `[start, end]`.
- Both indexes are inclusive.
- Count ranges whose sum is greater than or equal to `target`.
- Return `0` if there are no qualifying ranges.
- Do not modify the original array.
- Avoid recalculating every range from scratch.

## Testing Ideas

- Some ranges meet the target.
- Every range meets the target.
- No ranges meet the target.
- Empty input.

## After Completing

**Time Complexity:** O(n + q)

**Space Complexity:** O(n)

**Approach Used:** Used a prefix sum array to store running totals, then used those totals to calculate each query range sum and count how many were greater than or equal to the target.

**What I Found Difficult:** I understood the approach, but I still needed to look at the previous prefix-sum syntax to implement it.

**What I Would Do Differently Next Time:** Try to recreate the prefix-sum structure without looking at an older solution.