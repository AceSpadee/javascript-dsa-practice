import { describe, it, expect } from 'vitest';
import maxSumKConsecutive from './solution.js';

describe('maxSumKConsecutive', () => {
    it('return highest sum from consecutive k', () => {
        expect(maxSumKConsecutive([2, 1, 5, 1, 3, 2], 3)).toBe(9);
    });

    it('return highest sum with negatives from consecutive k', () => {
        expect(maxSumKConsecutive([-2, -1, -3, -4], 2)).toBe(-3);
    });

    it('return highest sum single number array from consecutive k', () => {
        expect(maxSumKConsecutive([5], 1)).toBe(5);
    });

    it('return null when k is greater than arrays length', () => {
        expect(maxSumKConsecutive([1, 2], 3)).toBe(null);
    });

    it('return highest sum with k as array length from consecutive k', () => {
        expect(maxSumKConsecutive([1, 2, 3, 4], 4)).toBe(10);
    });
});