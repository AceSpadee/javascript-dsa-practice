import { describe, it, expect } from 'vitest';
import findBalanceIndex from './solution.js';

describe('findBalanceIndex', () => {
    it('returns the index where the left sums and right sums match', () => {
        expect(findBalanceIndex([1, 7, 3, 6, 5, 6])).toBe(3);
    });

    it('returns -1 when there is no balance', () => {
        expect(findBalanceIndex([1, 2, 3])).toBe(-1);
    });

    it('returns the index where the left sums and right sums match', () => {
        expect(findBalanceIndex([2, 1, -1])).toBe(0);
    });

    it('returns the first balance index when multiple are valid', () => {
        expect(findBalanceIndex([0, 0, 0])).toBe(0);
    });

    it('returns -1 when there is no numbers', () => {
        expect(findBalanceIndex([])).toBe(-1);
    });

    it('does not modify the original array', () => {
        const numbers = [1, 7, 3, 6, 5, 6];

        findBalanceIndex(numbers);

        expect(numbers).toEqual([1, 7, 3, 6, 5, 6]);
    });
});