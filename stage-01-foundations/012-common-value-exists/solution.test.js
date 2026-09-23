import { describe, it, expect } from 'vitest';
import commonValueExists from './solution.js';

describe('commonValueExists', () => {
    it('returns true when common value exists', () => {
        expect(commonValueExists([1, 2, 3], [4, 5, 2])).toBe(true);
    });

    it('returns false when no common values', () => {
        expect(commonValueExists([1, 2, 3], [4, 5, 6])).toBe(false);
    });

    it('returns true for negative common values', () => {
        expect(commonValueExists([-3, -1, 2], [5, -1, 8])).toBe(true);
    });

    it('returns false when no common values with empty array', () => {
        expect(commonValueExists([], [1, 2, 3])).toBe(false);
    });
});