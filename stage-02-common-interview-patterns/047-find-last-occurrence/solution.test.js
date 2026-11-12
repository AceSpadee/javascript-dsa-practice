import { describe, it, expect } from 'vitest';
import findLastOccurrence from './solution.js';

describe('findLastOccurrence', () => {
    it('returns the last index where target found inside array', () => {
        expect(findLastOccurrence([1, 2, 2, 2, 3, 4], 2)).toBe(3);
    });

    it('returns the last index where target found inside array', () => {
        expect(findLastOccurrence([1, 1, 1, 2, 3], 1)).toBe(2);
    });

    it('returns the last index where target is the last value inside array', () => {
        expect(findLastOccurrence([1, 2, 3, 4], 4)).toBe(3);
    });

    it('returns -1 when the target isnt in the array', () => {
        expect(findLastOccurrence([1, 2, 3, 4], 5)).toBe(-1);
    });

    it('returns -1 when the array is empty', () => {
        expect(findLastOccurrence([], 2)).toBe(-1);
    });

    it('does not modify the original array', () => {
        const numbers = [1, 2, 2, 2, 3, 4];

        findLastOccurrence(numbers, 2);

        expect(numbers).toEqual([1, 2, 2, 2, 3, 4]);
    });
});