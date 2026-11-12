# Challenge 046 — Search Insert Position

## Difficulty

Intermediate

## Problem

Given a sorted array of distinct numbers and a target value, return the index of the target if it exists.

If the target does not exist, return the index where it should be inserted so that the array remains sorted.

## Examples

```javascript
searchInsertPosition([1, 3, 5, 7], 5);
// 2

searchInsertPosition([1, 3, 5, 7], 4);
// 2

searchInsertPosition([1, 3, 5, 7], 0);
// 0

searchInsertPosition([1, 3, 5, 7], 9);
// 4

searchInsertPosition([], 5);
// 0
```

## Requirements

- The array is sorted in ascending order.
- Values in the array are distinct.
- Return the target's index when it exists.
- Otherwise return the index where the target should be inserted.
- Do not modify the original array.
- Do not scan through the entire array from beginning to end.

## Testing Ideas

- Target exists.
- Target belongs somewhere in the middle.
- Target belongs at the beginning.
- Target belongs at the end.
- Empty array.

## After Completing

**Time Complexity:** O(log n)

**Space Complexity:** O(1)

**Approach Used:** Used binary search to check the middle value of the current search range. If the target was found, returned its index. If the target was not found, returned `left`, which ended at the correct insertion position.

**What I Found Difficult:** I understood most of the binary-search structure and did not look at an old solution, but I did not initially realize that `left` would already represent the correct insertion index when the loop finished.

**What I Would Do Differently Next Time:** Try to finish the binary-search logic independently without using hints.