import { describe, it, expect } from 'vitest';
import longestSubarrayWithinTarget from './solution.js';

describe('longestSubarrayWithinTarget', () => {
    it('return the largest window sum less than or equal to target', () => {
        expect(longestSubarrayWithinTarget([2, 1, 5, 1, 3], 7)).toBe(3);
    });

    it('return 0 when array values larger than target', () => {
        expect(longestSubarrayWithinTarget([8, 9], 5)).toBe(0);
    });

    it('return 0 when empty array', () => {
        expect(longestSubarrayWithinTarget([], 5)).toBe(0);
    });

    it('returns full array length when the entire array is valid', () => {
        expect(longestSubarrayWithinTarget([1, 1, 1], 5)).toBe(3);
    });

    it('does not modify the original array', () => {
        const numbers = [2, 1, 5, 1, 3];

        longestSubarrayWithinTarget(numbers, 7);

        expect(numbers).toEqual([2, 1, 5, 1, 3]);
    });
});