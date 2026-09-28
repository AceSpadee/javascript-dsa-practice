
# Stage 01 — Foundations Assessment

## Overview

This assessment tests the JavaScript fundamentals, data structures, and problem-solving techniques practiced throughout Stage 01.

The assessment contains five problems designed to test my ability to recognize and apply previously learned concepts independently.

## Assessment Rules

- Complete all five problems before receiving the final assessment.
- Previously completed challenges and my own solutions may be used as notes.
- External solutions and algorithmic hints are not permitted.
- Receiving an algorithmic hint results in a failed assessment.
- If the assessment is failed, complete additional practice before attempting a new assessment.
- Writing unit tests is encouraged but does not count toward the assessment grade.

## Problem 01 — Find First Value Above Threshold

### Difficulty

Beginner

### Problem

Given an array of numbers and a threshold, return the index of the first number that is strictly greater than the threshold.

If no number meets the condition, return `-1`.

### Function

```javascript
function firstIndexAbove(numbers, threshold) {

}
```

### Examples

```javascript
firstIndexAbove([3, 7, 2, 9], 6);
// 1

firstIndexAbove([1, 2, 3], 4);
// -1

firstIndexAbove([-5, -2, -8], -3);
// 1

firstIndexAbove([], 5);
// -1
```

### Requirements

- Return the first matching index, not the value.
- Return `-1` when no match exists.
- Handle negative numbers and empty arrays.
- Do not use `findIndex()` or `sort()`.

---

## Problem 02 — Count Values Above Average

### Difficulty

Beginner

### Problem

Given an array of numbers, return how many values are strictly greater than the average of the array.

For an empty array, return `0`.

### Function

```javascript
function countAboveAverage(numbers) {

}
```

### Examples

```javascript
countAboveAverage([1, 2, 3, 4, 5]);
// 2

countAboveAverage([10, 10, 10]);
// 0

countAboveAverage([-5, -3, -1]);
// 1

countAboveAverage([]);
// 0
```

### Requirements

- Return the number of values greater than the average.
- Values equal to the average do not count.
- Handle negative numbers.
- Return `0` for an empty array.
- Do not use `filter()` or `reduce()`.

## Problem 03 — Count Repeated Values

### Difficulty

Beginner+

### Problem

Given an array of numbers, return how many **distinct values** appear more than once.

Each repeated value should only be counted once, regardless of how many times it appears.

### Function

```javascript
function countRepeatedValues(numbers) {

}
```

### Examples

```javascript
countRepeatedValues([1, 2, 2, 3, 3, 3]);
// 2

countRepeatedValues([5, 5, 5, 5]);
// 1

countRepeatedValues([1, 2, 3, 4]);
// 0

countRepeatedValues([-1, -1, 2, -3, 2]);
// 2

countRepeatedValues([]);
// 0
```

### Requirements

- Return the number of distinct values that appear more than once.
- A value should only contribute `1` to the result even if it appears three or more times.
- Handle negative numbers.
- Return `0` for an empty array.
- Do not use nested loops.
- Do not use `filter()` or `reduce()`.

## Problem 04 — First Non-Repeated Value

### Difficulty

Beginner+

### Problem

Given an array of numbers, return the first value that appears exactly once in the array.

If every value appears more than once, return `null`.

### Function

```javascript
function firstNonRepeatedValue(numbers) {

}
```

### Examples

```javascript
firstNonRepeatedValue([4, 5, 4, 6, 5]);
// 6

firstNonRepeatedValue([1, 2, 3, 2, 1]);
// 3

firstNonRepeatedValue([7, 7, 8, 8]);
// null

firstNonRepeatedValue([-1, -2, -1, -3]);
// -2

firstNonRepeatedValue([]);
// null
```

### Requirements

- Return the first value that appears exactly once.
- Preserve the original array order.
- Return `null` if no non-repeated value exists.
- Handle negative numbers.
- Return `null` for an empty array.
- Do not use nested loops.
- Do not sort the array.

## Problem 05 — Count Common Distinct Values

### Difficulty

Beginner+

### Problem

Given two arrays of numbers, return how many distinct values appear in both arrays.

Each shared value should only be counted once, even if it appears multiple times in either array.

### Function

```javascript
function countCommonValues(numbers1, numbers2) {

}
```

### Examples

```javascript
countCommonValues([1, 2, 2, 3], [2, 3, 3, 4]);
// 2

countCommonValues([5, 5, 5], [5, 5]);
// 1

countCommonValues([1, 2, 3], [4, 5, 6]);
// 0

countCommonValues([-1, 2, -3], [-3, -1, -1, 5]);
// 2

countCommonValues([], [1, 2, 3]);
// 0
```

### Requirements

- Return the number of distinct values shared by both arrays.
- Count each shared value only once.
- Handle duplicates.
- Handle negative numbers.
- Return `0` if there are no shared values.
- Return `0` if either array is empty.
- Do not use nested loops.
- Do not sort either array.

## Assessment Result

**Attempt 1:** Not Passed

This assessment was completed without algorithmic hints. The submitted solutions are preserved as originally written.

After reviewing the results, I am completing additional Stage 01 practice focused on frequency maps, dynamic object keys, accumulator initialization, and translating a correct approach into working code before taking a new assessment.