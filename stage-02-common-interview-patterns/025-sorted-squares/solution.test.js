import { describe, it, expect } from 'vitest';
import sortedSquares from './solution.js';

describe('sortedSquares', () => {
    it('return sorted array by squared values', () => {
        expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
    });

    it('return sorted array by squared values with same squared value', () => {
        expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
    });

    it('return sorted array by squared value', () => {
        expect(sortedSquares([0, 1, 2])).toEqual([0, 1, 4]);
    });

    it('return sorted array by squared value with negatives', () => {
        expect(sortedSquares([-3, -2, -1])).toEqual([1, 4, 9]);
    });

    it('return empty array for no values provided', () => {
        expect(sortedSquares([])).toEqual([]);
    });

    it('return sorted array for single value', () => {
        expect(sortedSquares([-4])).toEqual([16]);
    });

    it('does not modify the original array', () => {
        const numbers = [-4, -1, 0, 3, 10];
        sortedSquares(numbers);

        expect(numbers).toEqual([-4, -1, 0, 3, 10]);
    });
});