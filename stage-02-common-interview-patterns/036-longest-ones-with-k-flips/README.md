# Challenge 036 — Longest Ones With K Flips

## Difficulty

Intermediate

## Problem

Given an array containing only `0` and `1`, and a number `k`, return the length of the longest consecutive group of `1`s you can create if you are allowed to change at most `k` zeroes into ones.

## Examples

```javascript
longestOnesWithKFlips([1, 1, 0, 1, 1], 1);
// 5

longestOnesWithKFlips([1, 0, 0, 1, 1, 1], 1);
// 4

longestOnesWithKFlips([0, 0, 1, 1], 0);
// 2

longestOnesWithKFlips([1, 1, 1], 2);
// 3

longestOnesWithKFlips([], 1);
// 0
```

## Requirements

- The group must be consecutive.
- You may treat at most `k` zeroes as ones.
- Return the longest valid group length.
- Return `0` for an empty array.
- Do not modify the original array.
- Do not use nested loops that restart from the beginning.

## Testing Ideas

- A window that uses all available flips.
- More zeroes than can be flipped.
- `k` equal to `0`.
- No zeroes.
- Empty array.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Used a variable-size sliding window to find the longest valid window containing at most `k` zeroes that would need to be flipped.

**What I Found Difficult:** I understood the sliding-window pattern, but I struggled to determine what condition the `while` loop should use. I looked at previous syntax to help figure out when the window should shrink.

**What I Would Do Differently Next Time:** Try to identify what makes the window invalid first, then use that condition for the `while` loop before looking at previous solutions.