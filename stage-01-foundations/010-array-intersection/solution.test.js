import { describe, it, expect } from 'vitest';
import arrayIntersection from './solution.js';

describe('arrayIntersection', () => {
    it('returns repeated values in order', () => {
        expect(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
    });

    it('returns unique repeated values', () => {
        expect(arrayIntersection([1, 2, 2, 3], [2, 3, 3])).toEqual([2, 3]);
    });

    it('returns empty array for no repeat', () => {
        expect(arrayIntersection([1, 2], [3, 4])).toEqual([]);
    });

    it('returns repeated values with negative numbers', () => {
        expect(arrayIntersection([-1, 2, -3], [-3, -1, 5])).toEqual([-1, -3]);
    });
});