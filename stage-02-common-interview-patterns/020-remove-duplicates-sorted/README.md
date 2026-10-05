# Challenge 020 — Remove Duplicates From Sorted Array

## Difficulty

Beginner+

## Problem

Given a **sorted** array of numbers, remove duplicate values so that each value appears only once.

Modify the original array and return it.

## Examples

```javascript
removeDuplicates([1, 1, 2, 2, 3]);
// [1, 2, 3]

removeDuplicates([1, 1, 1]);
// [1]

removeDuplicates([-3, -3, -1, 0, 0, 2]);
// [-3, -1, 0, 2]

removeDuplicates([5]);
// [5]

removeDuplicates([]);
// []
```

## Requirements

- The input array is already sorted.
- Modify the original array.
- Preserve the existing order.
- Return the modified array.
- Do not use `Set`.
- Do not use `splice()`.
- Do not use `filter()`.
- Do not create another array containing the result.

## Testing Ideas

- Several duplicate groups.
- Every value is the same.
- No duplicates.
- Negative numbers.
- Single value.
- Empty array.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Use one index outside the loop to track where the next unique value should go. Loop through the array and move new unique values forward so they overwrite duplicate positions.

**What I Found Difficult:** I still could not come up with the two-index solution without hints and looking back at the previous challenge.

**What I Would Do Differently Next Time:** Try using two indexes when I need to modify an array in place, with one index outside the loop tracking where the next useful value should go.