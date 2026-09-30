# Stage 01 — Foundations Assessment — Attempt 2

## Overview

This is the second Stage 01 assessment following additional review and practice.

Previously completed challenges may be used as notes. External solutions and algorithmic hints are not permitted.

---

## Problem 01 — First Value Below Threshold

### Difficulty

Beginner

### Problem

Given an array of numbers and a threshold, return the first **value** that is strictly less than the threshold.

If no value meets the condition, return `null`.

### Function

```javascript
function firstValueBelow(numbers, threshold) {

}
```

### Examples

```javascript
firstValueBelow([8, 3, 6, 2], 5);
// 3

firstValueBelow([5, 7, 9], 4);
// null

firstValueBelow([-1, -5, 2], -3);
// -5

firstValueBelow([], 10);
// null
```

### Requirements

- Return the first matching value, not its index.
- Return `null` if no match exists.
- Handle negative numbers.
- Handle an empty array.
- Do not use `find()`, `filter()`, or `sort()`.

--- 

## Problem 02 — Count Values Equal to Maximum

### Difficulty

Beginner+

### Problem

Given an array of numbers, return how many times the largest value appears in the array.

Return `0` for an empty array.

### Function

```javascript
function countMaximumOccurrences(numbers) {

}
```

### Examples

```javascript
countMaximumOccurrences([3, 7, 2, 7, 5]);
// 2

countMaximumOccurrences([4, 4, 4]);
// 3

countMaximumOccurrences([-5, -2, -2, -8]);
// 2

countMaximumOccurrences([9]);
// 1

countMaximumOccurrences([]);
// 0
```

### Requirements

- Return the number of times the maximum value appears.
- Handle negative numbers.
- Handle a single-value array.
- Return `0` for an empty array.
- Do not use `Math.max()`.
- Do not use `sort()`.
- Do not use `filter()`.

--- 

## Problem 03 — First Character With Target Frequency

### Difficulty

Beginner+

### Problem

Given a string and a target frequency, return the first character that appears exactly that many times in the string.

Return `null` if no character has that frequency.

Matching is case-sensitive.

### Function

```javascript
function firstCharacterWithFrequency(text, targetFrequency) {

}
```

### Examples

```javascript
firstCharacterWithFrequency('aabbc', 2);
// 'a'

firstCharacterWithFrequency('swiss', 1);
// 'w'

firstCharacterWithFrequency('aabbcc', 3);
// null

firstCharacterWithFrequency('AaA', 2);
// 'A'

firstCharacterWithFrequency('', 1);
// null
```

### Requirements

- Return the first character whose total frequency equals `targetFrequency`.
- Preserve the original string order.
- Matching is case-sensitive.
- Return `null` if no character matches.
- Return `null` for an empty string.
- Do not use nested loops.
- Do not sort the string.

---

## Problem 04 — Count Distinct Values Below Average

### Difficulty

Beginner+

### Problem

Given an array of numbers, return how many **distinct values** are strictly less than the average of the array.

Each value should only be counted once, even if it appears multiple times.

Return `0` for an empty array.

Do not round the average.

### Function

```javascript
function countDistinctBelowAverage(numbers) {

}
```

### Examples

```javascript
countDistinctBelowAverage([1, 2, 2, 4, 5]);
// 2

countDistinctBelowAverage([3, 3, 3]);
// 0

countDistinctBelowAverage([-5, -3, -3, -1]);
// 1

countDistinctBelowAverage([1, 1, 2, 4]);
// 1

countDistinctBelowAverage([]);
// 0
```

### Requirements

- Return the number of distinct values below the average.
- Count each value only once.
- Values equal to the average do not count.
- Do not round the average.
- Handle negative numbers.
- Return `0` for an empty array.
- Do not use nested loops.
- Do not use `filter()` or `reduce()`.

---

## Problem 05 — Count Shared Values Appearing Once

### Difficulty

Beginner+

### Problem

Given two arrays of numbers, return how many values appear in both arrays **and appear exactly once in each array**.

### Function

```javascript
function countSharedSingles(numbers1, numbers2) {

}
```

### Examples

```javascript
countSharedSingles([1, 2, 3], [2, 3, 4]);
// 2

countSharedSingles([1, 1, 2, 3], [1, 2, 3, 3]);
// 1

countSharedSingles([5, 5, 6], [5, 6, 6]);
// 0

countSharedSingles([-1, 2, -3], [-3, -1, 5]);
// 2

countSharedSingles([], [1, 2, 3]);
// 0
```

### Requirements

- Return the number of values shared by both arrays.
- A shared value only counts if it appears exactly once in `numbers1`.
- It must also appear exactly once in `numbers2`.
- Handle negative numbers.
- Return `0` if there are no qualifying shared values.
- Return `0` if either array is empty.
- Do not use nested loops.
- Do not sort either array.

---

## Assessment Result

**Attempt 2:** Passed

**Problems Passed:** 5/5

This assessment was completed without algorithmic hints. Previous completed challenges were available as notes.

After additional practice with frequency maps, dynamic object keys, accumulator initialization, and repeated-value logic, all five Stage 01 assessment problems were completed successfully.