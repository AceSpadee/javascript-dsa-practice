# Challenge 047 — Find Last Occurrence

## Difficulty

Intermediate

## Problem

Given a sorted array of numbers that may contain duplicates and a target value, return the index of the **last occurrence** of the target.

Return `-1` if the target does not exist.

## Examples

```javascript
findLastOccurrence([1, 2, 2, 2, 3, 4], 2);
// 3

findLastOccurrence([1, 1, 1, 2, 3], 1);
// 2

findLastOccurrence([1, 2, 3, 4], 4);
// 3

findLastOccurrence([1, 2, 3, 4], 5);
// -1

findLastOccurrence([], 2);
// -1
```

## Requirements

- The array is sorted in ascending order.
- The array may contain duplicate values.
- Return the last index where `target` appears.
- Return `-1` if the target does not exist.
- Do not modify the original array.
- Do not scan through the entire array from beginning to end.

## Testing Ideas

- Target appears multiple times.
- Target begins the array.
- Target appears once at the end.
- Target is missing.
- Empty array.

## After Completing

**Time Complexity:** O(log n)

**Space Complexity:** O(1)

**Approach Used:** Used binary search to find the last occurrence of the target. When a match was found, I saved the index and continued searching to the right for a later duplicate.

**What I Found Difficult:** I still needed a hint and looked at an older solution to complete the problem.

**What I Would Do Differently Next Time:** Try to solve the next binary-search problem without hints and without looking at an older solution.