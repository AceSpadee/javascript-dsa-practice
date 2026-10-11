import { describe, it, expect } from 'vitest';
import minSumKConsecutive from './solution.js';

describe('minSumKConsecutive', () => {
    it('return the smallest sum', () => {
        expect(minSumKConsecutive([2, 1, 5, 1, 3, 2], 3)).toBe(6);
    });

    it('return the smallest sum with negatives', () => {
        expect(minSumKConsecutive([-2, -1, -3, -4], 2)).toBe(-7);
    });

    it('return the smallest sum with the window same length as array', () => {
        expect(minSumKConsecutive([5], 1)).toBe(5);
    });

    it('return null when the window is bigger than array length', () => {
        expect(minSumKConsecutive([1, 2], 3)).toBe(null);
    });

    it('does not modify the original array', () => {
        const numbers = [2, 1, 5, 1, 3, 2];

        minSumKConsecutive(numbers, 3);

        expect(numbers).toEqual([2, 1, 5, 1, 3, 2]);
    });
});