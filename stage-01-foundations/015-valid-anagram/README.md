# Challenge 015 — Valid Anagram

## Difficulty

Beginner+

## Problem

Given two strings, determine whether they are anagrams of each other.

Two strings are anagrams if they contain exactly the same characters with the same frequencies, regardless of their order.

Matching is case-sensitive.

## Function

```javascript
function validAnagram(text1, text2) {

}
```

## Examples

```javascript
validAnagram('listen', 'silent');
// true

validAnagram('hello', 'world');
// false

validAnagram('aabb', 'bbaa');
// true

validAnagram('aab', 'abb');
// false

validAnagram('', '');
// true

validAnagram('Abc', 'abc');
// false
```

## Requirements

- Return a boolean.
- Both strings must contain the same characters and frequencies.
- Character order does not matter.
- Matching is case-sensitive.
- Return true for two empty strings.
- Do not use sort().
- Do not use nested loops.

## Testing

Write Vitest tests covering:

- Two valid anagrams
- Two strings that are not anagrams
- Repeated characters
- Different character frequencies
- Two empty strings
- Case sensitivity

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(n)

**Approach Used:** Created two objects to count how many times each character appeared in each string. Then compared their keys and frequencies to determine whether the strings were anagrams.

**What I Found Difficult:** I struggled with finding the right method to iterate over objects. When I tried forEach(), returning false inside the callback did not return from the main function.

**What I Would Do Differently Next Time:** Use a for...of or regular for loop when I need to return from a function while iterating. 