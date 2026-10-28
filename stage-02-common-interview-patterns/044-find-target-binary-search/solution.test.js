import { describe, it, expect } from 'vitest';
import findTarget from './solution.js';

describe('findTarget', () => {
    it('returns the index where target found inside array', () => {
        expect(findTarget([1, 3, 5, 7, 9], 7)).toBe(3);
    });

    it('returns 0 when target is at the beginning', () => {
        expect(findTarget([2, 4, 6, 8, 10], 2)).toBe(0);
    });

    it('returns the last index when target is at the end', () => {
        expect(findTarget([2, 4, 6, 8, 10], 10)).toBe(4);
    });

    it('returns -1 when target not in array', () => {
        expect(findTarget([1, 3, 5, 7], 4)).toBe(-1);
    });

    it('returns -1 when array empty', () => {
        expect(findTarget([], 5)).toBe(-1);
    });

    it('does not modify the original array', () => {
        const numbers = [1, 3, 5, 7, 9];

        findTarget(numbers, 7);

        expect(numbers).toEqual([1, 3, 5, 7, 9]);
    });
});