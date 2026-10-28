# Challenge 044 — Find Target in Sorted Array

## Difficulty

Intermediate

## Problem

Given a sorted array of numbers and a target value, return the index of the target.

If the target does not exist, return `-1`.

## Examples

```javascript
findTarget([1, 3, 5, 7, 9], 7);
// 3

findTarget([2, 4, 6, 8, 10], 2);
// 0

findTarget([2, 4, 6, 8, 10], 10);
// 4

findTarget([1, 3, 5, 7], 4);
// -1

findTarget([], 5);
// -1
```

## Requirements

- The input array is sorted in ascending order.
- Return the index of `target`.
- Return `-1` when the target does not exist.
- Do not modify the original array.
- Do not scan through every value from beginning to end.

## Testing Ideas

- Target in the middle.
- Target at the beginning.
- Target at the end.
- Target does not exist.
- Empty array.

## After Completing

**Time Complexity:** O(log n)

**Space Complexity:** O(1)

**Approach Used:** Used binary search by checking the middle value of the current search range and eliminating half of the remaining array after each comparison.

**What I Found Difficult:** I did not initially understand why binary search was better than simply moving left and right indexes inward one at a time. I also needed some guidance on which loop structure to use.

**What I Would Do Differently Next Time:** Try to recognize that when an array is sorted, comparing against the middle value can eliminate half of the remaining values at once.