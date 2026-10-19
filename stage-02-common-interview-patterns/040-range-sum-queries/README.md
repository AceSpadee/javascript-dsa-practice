# Challenge 040 — Range Sum Queries

## Difficulty

Intermediate

## Problem

Given an array of numbers and an array of queries, return the sum of the values within each requested range.

Each query contains two indexes:

```javascript
[start, end]
```

Both indexes are inclusive.

## Examples

```javascript
rangeSumQueries(
  [2, 4, 1, 5, 3],
  [[0, 2], [1, 3], [2, 4]]
);
// [7, 10, 9]

rangeSumQueries(
  [5, 10, 15],
  [[0, 0], [0, 2], [1, 2]]
);
// [5, 30, 25]

rangeSumQueries([], []);
// []
```

## Requirements

- Each query is `[start, end]`.
- `start` and `end` are valid indexes.
- Both indexes are inclusive.
- Return one sum for each query.
- Do not modify the original array.
- Avoid recalculating every range from scratch.

## Testing Ideas

- Multiple ranges.
- A range containing one value.
- A range covering the entire array.
- Empty input with no queries.

## After Completing

**Time Complexity:** O(n + q)

**Space Complexity:** O(n)

**Approach Used:** Used a prefix sum array to store the running total up to each position. Each query then subtracts the total before `start` from the total through `end` to get the requested range sum.

**What I Found Difficult:** I needed guidance to recognize that prefix sums were the right approach and also needed help with the syntax and range formula.

**What I Would Do Differently Next Time:** Try to determine the approach more independently before asking for guidance.