# Challenge 016 — Character Frequencies

## Difficulty

Beginner

## Problem

Given a string, return an object containing each character and the number of times it appears.

Character matching is case-sensitive.

## Function

```javascript
function characterFrequencies(text) {

}
```

## Examples

```javascript
characterFrequencies('hello');
// { h: 1, e: 1, l: 2, o: 1 }

characterFrequencies('aabbc');
// { a: 2, b: 2, c: 1 }

characterFrequencies('AaA');
// { A: 2, a: 1 }

characterFrequencies('');
// {}
```

## Requirements

- Return an object.
- Each character should become a key.
- Each value should contain that character's frequency.
- Matching is case-sensitive.
- Return an empty object for an empty string.
- Do not use `reduce()`.

## Testing

Write Vitest tests covering:

- Repeated characters
- Multiple repeated characters
- Case sensitivity
- An empty string

## After Completing

**Time Complexity:** O(n)

**Space Complexity:** O(n)

**Approach Used:** Looped through the string, added each unique character to an object, and increased its count every time the character appeared again.

**What I Found Difficult:** Nothing significant on this challenge.

**What I Would Do Differently Next Time:** Remember to use bracket notation when the object key comes from a dynamic value.