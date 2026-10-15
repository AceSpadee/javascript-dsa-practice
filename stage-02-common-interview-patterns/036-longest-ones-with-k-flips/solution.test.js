import { describe, it, expect } from 'vitest';
import longestOnesWithKFlips from './solution.js';

describe('longestOnesWithKFlips', () => {
    it('returns the longest window containing only 1s and k amount of 0', () => {
        expect(longestOnesWithKFlips([1, 1, 0, 1, 1], 1)).toBe(5);
    });

    it('returns the longest window containing only 1s and k amount of 0', () => {
        expect(longestOnesWithKFlips([1, 0, 0, 1, 1, 1], 1)).toBe(4);
    });

    it('returns the longest window containing only 1s with no flips', () => {
        expect(longestOnesWithKFlips([0, 0, 1, 1], 0)).toBe(2);
    });

    it('returns the full array length when there are no zeroes', () => {
        expect(longestOnesWithKFlips([1, 1, 1], 2)).toBe(3);
    });

    it('returns 0 with empty array', () => {
        expect(longestOnesWithKFlips([], 1)).toBe(0);
    });

    it('does not modify the original array', () => {
        const numbers = [1, 0, 0, 1, 1, 1];

        longestOnesWithKFlips(numbers, 1);

        expect(numbers).toEqual([1, 0, 0, 1, 1, 1]);
    });
});