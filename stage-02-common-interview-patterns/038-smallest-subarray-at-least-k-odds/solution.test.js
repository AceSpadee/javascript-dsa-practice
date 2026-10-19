import { describe, it, expect } from 'vitest';
import smallestSubarrayAtLeastKOdds from './solution.js';

describe('smallestSubarrayAtLeastKOdds', () => {
    it('returns the smallest window containing at least k odd values', () => {
        expect(smallestSubarrayAtLeastKOdds([2, 1, 4, 3, 6, 5], 2)).toBe(3);
    });

    it('returns a window of length 1 when one odd value satisfies k', () => {
        expect(smallestSubarrayAtLeastKOdds([2, 4, 1, 6, 8], 1)).toBe(1);
    });

    it('returns 0 when no odd numbers in array', () => {
        expect(smallestSubarrayAtLeastKOdds([2, 4, 6], 1)).toBe(0);
    });

    it('returns 0 when array empty', () => {
        expect(smallestSubarrayAtLeastKOdds([], 1)).toBe(0);
    });

    it('does not modify the original array', () => {
        const numbers = [2, 1, 4, 3, 6, 5];

        smallestSubarrayAtLeastKOdds(numbers, 2);

        expect(numbers).toEqual([2, 1, 4, 3, 6, 5]);
    });
});