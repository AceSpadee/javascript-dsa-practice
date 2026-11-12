# Challenge 048 — Count Target Occurrences

## Difficulty

Intermediate

## Problem

Given a sorted array of numbers that may contain duplicates and a target value, return how many times the target appears.

Return `0` if the target does not exist.

## Examples

```javascript
countTargetOccurrences([1, 2, 2, 2, 3, 4], 2);
// 3

countTargetOccurrences([1, 1, 1, 2, 3], 1);
// 3

countTargetOccurrences([1, 2, 3, 4], 4);
// 1

countTargetOccurrences([1, 2, 3, 4], 5);
// 0

countTargetOccurrences([], 2);
// 0
```

## Requirements

- The array is sorted in ascending order.
- The array may contain duplicate values.
- Return the number of times `target` appears.
- Return `0` if the target does not exist.
- Do not modify the original array.
- Do not scan through the entire array from beginning to end.
- Aim for `O(log n)` time.

## Testing Ideas

- Target appears multiple times.
- Target appears once.
- Target fills most of the array.
- Target is missing.
- Empty array.

## After Completing

**Time Complexity:** O(log n)

**Space Complexity:** O(1)

**Approach Used:** Used two binary searches: one to find the leftmost occurrence of the target and one to find the rightmost occurrence. Then calculated the total count using the inclusive range between those two indexes.

**What I Found Difficult:** I struggled to identify the correct approach for keeping the solution at O(log n). I needed hints and referenced older binary-search solutions.

**What I Would Do Differently Next Time:** Try to determine the binary-search variation without using hints or looking at an older solution.