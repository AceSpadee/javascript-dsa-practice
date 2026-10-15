# Challenge 037 — Longest Substring With At Most K Distinct Characters

## Difficulty

Intermediate

## Problem

Given a string and a number `k`, return the length of the longest consecutive substring containing at most `k` different characters.

## Examples

```javascript
longestSubstringAtMostKDistinct('eceba', 2);
// 3
// "ece"

longestSubstringAtMostKDistinct('aaabbcc', 2);
// 5
// "aaabb"

longestSubstringAtMostKDistinct('abc', 3);
// 3

longestSubstringAtMostKDistinct('abc', 1);
// 1

longestSubstringAtMostKDistinct('', 2);
// 0
```

## Requirements

- Characters must be consecutive.
- The window may contain at most `k` distinct characters.
- Repeated occurrences of the same character count as one distinct character.
- Return the longest valid window length.
- Return `0` for an empty string.
- Do not use nested loops that restart from the beginning.

## Testing Ideas

- Repeated characters.
- More distinct characters than `k`.
- Exactly `k` distinct characters.
- `k` greater than the number of distinct characters.
- Empty string.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(k)

**Approach Used:** Used a variable-size sliding window with a frequency map. The frequency map tracks how many times each character appears inside the current window, while `distinctCount` tracks how many unique characters are present.

**What I Found Difficult:** I originally tried using a Set, but that did not track how many copies of each character were still inside the window. I also needed a small hint and had to look up how to delete a property from an object.

**What I Would Do Differently Next Time:** When a problem needs to track repeated values inside a window, remember to consider a frequency object instead of only a Set.