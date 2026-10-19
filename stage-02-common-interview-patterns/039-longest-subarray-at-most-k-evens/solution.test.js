import { describe, it, expect } from 'vitest';
import longestSubarrayAtMostKEvens from './solution.js';

describe('longestSubarrayAtMostKEvens', () => {
    it('returns the longest window containing at most k even numbers', () => {
        expect(longestSubarrayAtMostKEvens([1, 2, 3, 4, 5], 2)).toBe(5);
    });

    it('returns the longest window containing at most k even numbers', () => {
        expect(longestSubarrayAtMostKEvens([2, 4, 6], 1)).toBe(1);
    });

    it('returns the array length when k 0', () => {
        expect(longestSubarrayAtMostKEvens([1, 3, 5], 0)).toBe(3);
    });

    it('returns 0 when the array is empty', () => {
        expect(longestSubarrayAtMostKEvens([], 2)).toBe(0);
    });

    it('does not modify the original array', () => {
        const numbers = [1, 2, 3, 4, 5];

        longestSubarrayAtMostKEvens(numbers, 2);

        expect(numbers).toEqual([1, 2, 3, 4, 5]);
    });
});