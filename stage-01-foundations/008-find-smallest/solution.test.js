import { describe, it, expect } from 'vitest';
import findSmallest from './solution.js';

describe('findSmallest', () => {
    it('returns smallest from array', () => {
        expect(findSmallest([8, 3, 10, 2, 7])).toBe(2);
    });

    it('returns smallest from negative numbers', () => {
        expect(findSmallest([-4, -10, -2, -7])).toBe(-10);
    });

    it('returns smallest with one value', () => {
        expect(findSmallest([5])).toBe(5);
    });

    it('returns smallest with duplicates', () => {
        expect(findSmallest([3, 1, 1, 4])).toBe(1);
    });
});