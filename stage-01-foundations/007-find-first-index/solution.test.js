import { describe, it, expect } from 'vitest';
import findFirstIndex from './solution.js';

describe('findFirstIndex', () => {
    it('returns index where target first appears', () => {
        expect(findFirstIndex([4, 7, 2, 7, 9], 7)).toBe(1);
    });

    it('returns -1 for not matching target', () => {
        expect(findFirstIndex([1, 2, 3], 5)).toBe(-1);
    });

    it('returns index where index at 0', () => {
        expect(findFirstIndex([8, 3, 6], 8)).toBe(0);
    });

    it('returns index where target first appears with negative numbers', () => {
        expect(findFirstIndex([-3, -1, -3], -3)).toBe(0);
    });
});