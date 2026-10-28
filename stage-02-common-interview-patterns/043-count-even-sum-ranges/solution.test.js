import { describe, it, expect } from 'vitest';
import countEvenSumRanges from './solution.js';

describe('countEvenSumRanges', () => {
    it('returns count of every even sum from index', () => {
        expect(countEvenSumRanges([2, 3, 4, 1], [[0, 1], [1, 2], [0, 3]])).toBe(1);
    });

    it('returns count of every even sum from index', () => {
        expect(countEvenSumRanges([2, 4, 6, 8], [[0, 1], [1, 2], [0, 3]])).toBe(3);
    });

    it('returns 0 when no queried range has an even sum', () => {
        expect(countEvenSumRanges([1, 3, 5], [[0, 0], [1, 1], [2, 2]])).toBe(0);
    });

    it('returns 0 when array is empty', () => {
        expect(countEvenSumRanges([], [])).toBe(0);
    });

    it('does not modify the original array', () => {
        const numbers = [2, 3, 4, 1];

        countEvenSumRanges(numbers, [[0, 1], [1, 2]]);

        expect(numbers).toEqual([2, 3, 4, 1]);
    });
});