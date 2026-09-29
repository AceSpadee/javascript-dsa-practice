# Challenge 018 — Count Repeated Characters

## Difficulty

Beginner+

## Problem

Given a string, return how many distinct characters appear more than once.

Each repeated character should only be counted once, no matter how many times it appears.

Character matching is case-sensitive.

## Function

```javascript
function countRepeatedCharacters(text) {

}
```

## Examples

```javascript
countRepeatedCharacters('aabbc');
// 2

countRepeatedCharacters('aaaa');
// 1

countRepeatedCharacters('abc');
// 0

countRepeatedCharacters('aAaa');
// 1

countRepeatedCharacters('');
// 0
```

## Requirements

- Return the number of distinct characters that repeat.
- Each repeated character should only contribute `1` to the result.
- Matching is case-sensitive.
- Return `0` for an empty string.
- Do not use nested loops.
- Do not use `filter()` or `reduce()`.

## Testing

Write Vitest tests covering:

- Multiple repeated characters
- One character repeated many times
- No repeated characters
- Case sensitivity
- An empty string

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(n)

**Approach Used:** Loop through the string to build a frequency object, then loop through the object keys and count how many characters appear more than once.

**What I Found Difficult:** I used the wrong object name in the for...of loop and had to look up the for...of syntax.

**What I Would Do Differently Next Time:** Remember to loop through the frequency object's keys when I need to check the stored counts.