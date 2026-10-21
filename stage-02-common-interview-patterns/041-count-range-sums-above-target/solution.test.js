import { describe, it, expect } from 'vitest';
import countRangeSumsAboveTarget from './solution.js';

describe('countRangeSumsAboveTarget', () => {
    it('returns a count of every range sum greater than or equal to target', () => {
        expect(countRangeSumsAboveTarget([2, 4, 1, 5, 3], [[0, 2], [1, 3], [2, 4]], 9)).toBe(2);
    });

    it('returns the count when every range meets the target', () => {
        expect(countRangeSumsAboveTarget([5, 10, 15], [[0, 0], [0, 2], [1, 2]], 5)).toBe(3);
    });

    it('returns 0 when no range meets the target', () => {
        expect(countRangeSumsAboveTarget([1, 2, 3], [[0, 0], [0, 1]], 10)).toBe(0);
    });
    
    it('returns 0 when numbers array empty', () => {
        expect(countRangeSumsAboveTarget([], [], 5)).toBe(0);
    });

    it('does not modify the original array', () => {
        const numbers = [2, 4, 1, 5, 3];

        countRangeSumsAboveTarget(numbers, [[0, 2], [1, 3]], 9);

        expect(numbers).toEqual([2, 4, 1, 5, 3]);
    });
});