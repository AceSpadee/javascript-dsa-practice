# Challenge 038 — Smallest Subarray With At Least K Odd Numbers

## Difficulty

Intermediate

## Problem

Given an array of positive integers and a positive number `k`, return the length of the smallest consecutive group containing at least `k` odd numbers.

Return `0` if no valid group exists.

## Examples

```javascript
smallestSubarrayAtLeastKOdds([2, 1, 4, 3, 6, 5], 2);
// 3

smallestSubarrayAtLeastKOdds([1, 3, 2, 5], 2);
// 2

smallestSubarrayAtLeastKOdds([2, 4, 1, 6, 8], 1);
// 1

smallestSubarrayAtLeastKOdds([1, 3, 5], 2);
// 2

smallestSubarrayAtLeastKOdds([2, 4, 6], 1);
// 0

smallestSubarrayAtLeastKOdds([], 2);
// 0
```

## Requirements

- Values must be consecutive.
- The window must contain at least `k` odd numbers.
- Return the smallest valid window length.
- Return `0` if no valid window exists.
- Do not modify the original array.
- Do not use nested loops that restart from the beginning.

## Testing Ideas

- Exactly `k` odd values.
- More than `k` odd values.
- A single odd value satisfying the requirement.
- No valid window.
- Empty array.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Used a variable-size sliding window. The right pointer grows the window and tracks how many odd values are inside it. Once the window contains at least `k` odd values, the left pointer shrinks the window while checking for the smallest valid length.

**What I Found Difficult:** I still do not fully understand how the variable sliding-window syntax works. I had to copy the structure from an older solution and still needed hints to finish it.

**What I Would Do Differently Next Time:** Try to solve the next sliding-window problem with less guidance and avoid copying old syntax so I can see what I actually remember.