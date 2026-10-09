import { describe, it, expect } from 'vitest';
import mergeSortedArrays from './solution.js';

describe('mergeSortedArrays', () => {
    it('return merged sorted array', () => {
        expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('return merged sorted array with different lengths', () => {
        expect(mergeSortedArrays([1, 2, 7], [3, 4])).toEqual([1, 2, 3, 4, 7]);
    });

    it('return merged sorted array with second array empty', () => {
        expect(mergeSortedArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('return merged sorted array with first array empty', () => {
        expect(mergeSortedArrays([1, 2], [])).toEqual([1, 2]);
    });

    it('return merged sorted array with duplicate numbers', () => {
        expect(mergeSortedArrays([1, 2, 2], [2, 3])).toEqual([1, 2, 2, 2, 3]);
    });

    it('return merged sorted array with negatives', () => {
        expect(mergeSortedArrays([-5, -3, -1], [-6, -4, -2])).toEqual([-6, -5, -4, -3, -2, -1]);
    });

    it('return empty array with no values provided', () => {
        expect(mergeSortedArrays([], [])).toEqual([]);
    });

    it('does not modify the original array', () => {
        const numbers1 = [1, 3, 5];
        const numbers2 = [2, 4, 6];
        mergeSortedArrays(numbers1, numbers2);

        expect(numbers1).toEqual([1, 3, 5]);
        expect(numbers2).toEqual([2, 4, 6]);
    });
});