# Challenge 034 — Longest Substring Without Repeating Characters

## Difficulty

Intermediate

## Problem

Given a string, return the length of the longest consecutive substring that contains no repeated characters.

Matching is case-sensitive.

## Examples

```javascript
longestUniqueSubstring('abcabcbb');
// 3
// "abc"

longestUniqueSubstring('bbbbb');
// 1

longestUniqueSubstring('pwwkew');
// 3
// "wke"

longestUniqueSubstring('abcdef');
// 6

longestUniqueSubstring('aAabc');
// 4

longestUniqueSubstring('');
// 0
```

## Requirements

- Characters in the substring must be consecutive.
- No character may appear more than once in the active substring.
- Matching is case-sensitive.
- Return the longest valid substring length.
- Return `0` for an empty string.
- Do not use nested loops that restart from the beginning.

## Testing Ideas

- Repeated characters.
- Every character is the same.
- No repeated characters.
- Case-sensitive characters.
- Empty string.
- Repeated characters in different parts of the string.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(n)

**Approach Used:** Used a variable-size sliding window with a Set that stores the unique characters currently inside the window. The right pointer grows the window, and the left pointer shrinks it when a duplicate is found.

**What I Found Difficult:** I had roughly the right idea, but I still needed to look at previous variable sliding-window syntax and needed a little guidance to put the logic together.

**What I Would Do Differently Next Time:** Try to remember the general variable sliding-window structure instead of relying on the exact syntax from previous challenges.