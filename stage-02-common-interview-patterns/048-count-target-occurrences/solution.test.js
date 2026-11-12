import { describe, it, expect } from 'vitest';
import countTargetOccurrences from './solution.js';

describe('countTargetOccurrences', () => {
    it('returns the count for how many times target is in array', () => {
        expect(countTargetOccurrences([1, 2, 2, 2, 3, 4], 2)).toBe(3);
    });

    it('returns 1 when target appears once', () => {
        expect(countTargetOccurrences([1, 2, 3, 4], 4)).toBe(1);
    });

    it('returns 0 when the target isnt in the array', () => {
        expect(countTargetOccurrences([1, 2, 3, 4], 5)).toBe(0);
    });

    it('returns when array is empty', () => {
        expect(countTargetOccurrences([], 2)).toBe(0);
    });

    it('does not modify the original array', () => {
        const numbers = [1, 2, 2, 2, 3, 4];

        countTargetOccurrences(numbers, 2);

        expect(numbers).toEqual([1, 2, 2, 2, 3, 4]);
    });
});