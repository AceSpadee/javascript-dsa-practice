import { describe, it, expect } from 'vitest';
import containsDuplicate from './solution.js';

describe('containsDuplicate', () => {
    it('returns true when the array contains duplicates', () => {
        expect(containsDuplicate([1, 2, 3, 2, 4,])).toBe(true);
    });

    it('returns false when the array contains no duplicates', () => {
        expect(containsDuplicate([1, 2, 3, 4,])).toBe(false);
    });

    it('returns true when the array contains only duplicates', () => {
        expect(containsDuplicate([5, 5])).toBe(true);
    });

    it('returns false when negative values are all unique', () => {
        expect(containsDuplicate([-1, -2, -3])).toBe(false);
    });
})