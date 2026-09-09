import { describe, it, expect } from 'vitest';
import findLargest from './solution.js';

describe('findLargest', () => {
    it('return the largest positive number', () => {
        expect(findLargest([3, 8, 2, 10, 4])).toBe(10);
    });

    it('returns the largest number from negative values', () => {
        expect(findLargest([-10, -3, -20])).toBe(-3);
    });

    it('returns the only number in a single-value array', () => {
        expect(findLargest([7])).toBe(7);
    });

    it('returns the largest number when it appears more than once', () => {
        expect(findLargest([4, 9, 2, 9, 1])).toBe(9);
    });
});