import { describe, it, expect } from 'vitest';
import pairSumSorted from './solution.js';

describe('pairSumSorted', () => {
    it('return true if pair sum found', () => {
        expect(pairSumSorted([1, 2, 3, 4, 6], 6)).toBe(true);
    });

    it('return false if no pair sum', () => {
        expect(pairSumSorted([1, 2, 4, 7, 11], 10)).toBe(false);
    });

    it('return true with pair and negatives', () => {
        expect(pairSumSorted([-5, -2, 0, 3, 8], 1)).toBe(true);
    });

    it('return false when no numbers provided', () => {
        expect(pairSumSorted([], 5)).toBe(false);
    });

    it('return true with duplicates match', () => {
        expect(pairSumSorted([2, 2, 3], 4)).toBe(true);
    });

    it('return false when no pair sums', () => {
        expect(pairSumSorted([3], 6)).toBe(false);
    });
});