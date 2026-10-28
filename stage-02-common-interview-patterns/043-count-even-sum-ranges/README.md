# Challenge 043 — Count Even-Sum Ranges

## Difficulty

Intermediate

## Problem

Given an array of integers and an array of range queries, return how many query ranges have an even sum.

Each query is:

```javascript
[start, end]
```

Both indexes are inclusive.

## Examples

```javascript
countEvenSumRanges(
  [2, 3, 4, 1],
  [[0, 1], [1, 2], [0, 3]]
);
// 1

// [0, 1] → 2 + 3 = 5  → odd
// [1, 2] → 3 + 4 = 7  → odd
// [0, 3] → 2 + 3 + 4 + 1 = 10 → even
```

```javascript
countEvenSumRanges(
  [1, 1, 2, 2],
  [[0, 1], [2, 3], [1, 3]]
);
// 3
```

```javascript
countEvenSumRanges([], []);
// 0
```

## Requirements

- Each query is `[start, end]`.
- Both indexes are inclusive.
- Count how many queried ranges have an even sum.
- Return `0` if none qualify.
- Do not modify the original array.
- Avoid recalculating every range from scratch.

## Testing Ideas

- Some ranges have even sums.
- Every range has an even sum.
- No ranges have an even sum.
- Single-value ranges.
- Empty input.

## After Completing

**Time Complexity:** O(n + q)

**Space Complexity:** O(n)

**Approach Used:** Used a prefix sum array to store the running totals, then used the prefix values to calculate each query range sum and count how many were even.

**What I Found Difficult:** I still needed to look at an older prefix-sum solution to remember the structure.

**What I Would Do Differently Next Time:** Try to solve the next prefix-sum problem without looking at an older solution.