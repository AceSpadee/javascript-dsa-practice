import { describe, it, expect } from 'vitest';
import findFirstOccurrence from './solution.js';

describe('findFirstOccurrence', () => {
    it('returns the index where target found inside array', () => {
        expect(findFirstOccurrence([1, 2, 2, 2, 3, 4], 2)).toBe(1);
    });

    it('returns the index where target is first inside array', () => {
        expect(findFirstOccurrence([1, 1, 1, 2, 3], 1)).toBe(0);
    });

    it('returns the index when target appears once at the end', () => {
        expect(findFirstOccurrence([1, 2, 3, 4], 4)).toBe(3);
    });

    it('returns -1 when target isnt in array', () => {
        expect(findFirstOccurrence([1, 2, 3, 4], 5)).toBe(-1);
    });

    it('returns -1 when array empty', () => {
        expect(findFirstOccurrence([], 2)).toBe(-1);
    });

    it('does not modify the original array', () => {
        const numbers = [1, 2, 2, 2, 3, 4];

        findFirstOccurrence(numbers, 2);

        expect(numbers).toEqual([1, 2, 2, 2, 3, 4]);
    });
});