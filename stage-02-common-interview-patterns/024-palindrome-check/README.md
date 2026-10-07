# Challenge 024 — Palindrome Check

## Difficulty

Beginner+

## Problem

Given a string, return `true` if it reads the same forward and backward.

Otherwise, return `false`.

Matching is case-sensitive.

## Examples

```javascript
isPalindrome('racecar');
// true

isPalindrome('abba');
// true

isPalindrome('hello');
// false

isPalindrome('Racecar');
// false

isPalindrome('a');
// true

isPalindrome('');
// true
```

## Requirements

- Return `true` if the string is a palindrome.
- Return `false` otherwise.
- Matching is case-sensitive.
- Do not use `reverse()`.
- Do not create a reversed copy of the string.

## Testing Ideas

- Odd-length palindrome.
- Even-length palindrome.
- Non-palindrome.
- Different capitalization.
- Single character.
- Empty string.

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Approach Used:** Compare the leftmost and rightmost characters. If they don't match, return false. If they match, move the left pointer forward and the right pointer backward until all pairs are checked.

**What I Found Difficult:** I didn't find the overall approach very challenging, but I initially forgot to move the pointers inside the loop.

**What I Would Do Differently Next Time:** Remember to increment the left pointer and decrement the right pointer after a successful comparison.