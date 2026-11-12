import { describe, it, expect } from 'vitest';
import searchInsertPosition from './solution.js';

describe('searchInsertPosition', () => {
    it('returns the index where target found inside array', () => {
        expect(searchInsertPosition([1, 3, 5, 7], 5)).toBe(2);
    });
    
    it('returns the index where target should be inside array', () => {
        expect(searchInsertPosition([1, 3, 5, 7], 4)).toBe(2);
    });

    it('returns the first index where target should be inside array', () => {
        expect(searchInsertPosition([1, 3, 5, 7], 0)).toBe(0);
    });

    it('returns the last index where target should be inside array', () => {
        expect(searchInsertPosition([1, 3, 5, 7], 9)).toBe(4);
    });

    it('returns the first index when the arrays empty', () => {
        expect(searchInsertPosition([], 5)).toBe(0);
    });

    it('does not modify the original array', () => {
        const numbers = [1, 3, 5, 7];

        searchInsertPosition(numbers, 4);

        expect(numbers).toEqual([1, 3, 5, 7]);
    });
});