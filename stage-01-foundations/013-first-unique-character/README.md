# Challenge 013 — First Unique Character

## Difficulty
Beginner+

## Problem
Given a string, return the first character that appears exactly once in the string.

If every character appears more than once, return `null`.

Character matching is case-sensitive.

## Function
```javascript
function firstUniqueCharacter(text) {

}
```

## Examples
```javascript
firstUniqueCharacter('swiss');
// 'w'

firstUniqueCharacter('aabbc');
// 'c'

firstUniqueCharacter('aabbcc');
// null

firstUniqueCharacter('aAbBa');
// 'A'
```

## Requirements
- Return the first character that appears exactly once.
- Return `null` if no unique character exists.
- Return `null` for an empty string.
- Matching must be case-sensitive.
- Do not sort the string.
- Do not use nested loops.

## Testing
Write tests covering:
- A unique character between repeated characters
- A unique character at the end
- No unique characters
- Case sensitivity
- An empty string

## After Completing
**Time Complexity:** O(n)

**Space Complexity:** O(n)

**Approach Used:** Loop through the string to count character frequencies, then loop through it again to return the 
first character with a count of 1.

**What I Found Difficult:** I initially used Object.keys() to find the first unique character but discovered that 
numeric keys may not preserve their original order.

**What I Would Do Differently Next Time:** Loop through the original string when the order of characters matters.