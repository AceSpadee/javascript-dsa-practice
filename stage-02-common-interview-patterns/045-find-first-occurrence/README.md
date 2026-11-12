# Challenge 045 — Find First Occurrence

## Difficulty

Intermediate

## Problem

Given a sorted array of numbers that may contain duplicates and a target value, return the index of the **first occurrence** of the target.

Return `-1` if the target does not exist.

## Examples

```javascript
findFirstOccurrence([1, 2, 2, 2, 3, 4], 2);
// 1

findFirstOccurrence([1, 1, 1, 2, 3], 1);
// 0

findFirstOccurrence([1, 2, 3, 4], 4);
// 3

findFirstOccurrence([1, 2, 3, 4], 5);
// -1

findFirstOccurrence([], 2);
// -1
```

## Requirements

- The array is sorted in ascending order.
- The array may contain duplicate values.
- Return the first index where `target` appears.
- Return `-1` if the target does not exist.
- Do not modify the original array.
- Do not scan through the entire array from beginning to end.

## Testing Ideas

- Target appears multiple times.
- Target begins the array.
- Target appears once.
- Target is missing.
- Empty array.

## After Completing

**Time Complexity:** O(log n)

**Space Complexity:** O(1)

**Approach Used:** Used binary search to repeatedly split the remaining search area in half. When the target was found, I saved its index and continued searching the left half to find the first occurrence.

**What I Found Difficult:** I found a working solution at first, but it could become O(n) because I searched backward through duplicate values instead of continuing the binary search.

**What I Would Do Differently Next Time:** Try to keep the entire solution using binary search instead of falling back to a linear search.