# Challenge 004 — Count Character Occurrences

## Difficulty

Beginner

## Problem

Given a string and a target character, return how many times that character appears in the string.

Character matching is case-sensitive.

## Function

```javascript
function countCharacters(text, target) {

}
```

## Examples

```javascript
countCharacters('banana', 'a');
// 3

countCharacters('hello', 'l');
// 2

countCharacters('JavaScript', 'a');
// 2

countCharacters('hello', 'z');
// 0
```

## Requirements

- Return the number of times the target character appears.
- Return `0` if the character does not appear.
- Matching should be case-sensitive.
- Do not use `split()` followed by `filter()`.

## Testing

Write tests using Vitest.

Try to cover:

- A character appearing multiple times
- A character that does not appear
- A character appearing once
- Case sensitivity

## After Completing

**Time Complexity:** O(n)
**Space Complexity:** O(1)
**Approach Used:** Used a for loop to iterate over the string and count matching characters.
**What I Found Difficult:** I needed to look up how to iterate over a string.
**What I Would Do Differently Next Time:** Remember that strings can be accessed with bracket notation.