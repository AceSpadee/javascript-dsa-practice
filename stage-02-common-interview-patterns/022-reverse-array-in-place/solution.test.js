import { describe, it, expect } from 'vitest';
import reverseArray from './solution.js';

describe('reverseArray', () => {
    it('return reversed array', () => {
        expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    });

    it('return reversed array with only positive', () => {
        expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    });

    it('return same array when only 1 number', () => {
        expect(reverseArray([7])).toEqual([7]);
    });

    it('return reversed array with negative and positives', () => {
        expect(reverseArray([-1, 0, 3])).toEqual([3, 0, -1]);
    });

    it('return empty array when no numbers', () => {
        expect(reverseArray([])).toEqual([]);
    });

    it('returns the same array provided', () => {
        const numbers = [1, 2, 3, 4];
        const result = reverseArray(numbers);
        expect(result).toBe(numbers);
    });
});