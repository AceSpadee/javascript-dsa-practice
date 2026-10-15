import { describe, it, expect } from 'vitest';
import longestSubarrayAtMostKOdds from './solution.js';

describe('longestSubarrayAtMostKOdds', () => {
    it('returns the longest window containing at most k odd numbers', () => {
        expect(longestSubarrayAtMostKOdds([1, 2, 3, 4, 5], 2)).toBe(4);
    });

    it('returns the full array length when all values are even', () => {
        expect(longestSubarrayAtMostKOdds([2, 4, 6, 8], 1)).toBe(4);
    });

    it('shrinks the window when there are more than k odd numbers', () => {
        expect(longestSubarrayAtMostKOdds([1, 3, 5, 2], 1)).toBe(2);
    });

    it('returns 0 when k is 0 and all values are odd', () => {
        expect(longestSubarrayAtMostKOdds([1, 3, 5], 0)).toBe(0);
    });

    it('returns 0 for an empty array', () => {
        expect(longestSubarrayAtMostKOdds([], 2)).toBe(0);
    });

    it('does not modify the original array', () => {
        const numbers = [1, 2, 3, 4, 5];

        longestSubarrayAtMostKOdds(numbers, 2);

        expect(numbers).toEqual([1, 2, 3, 4, 5]);
    });
});