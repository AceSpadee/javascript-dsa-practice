import { describe, it, expect } from 'vitest';
import firstRepeatedValue from './solution.js';

describe('firstRepeatedValue', () => {
    it('returns first repeated value', () => {
        expect(firstRepeatedValue([2, 5, 1, 2, 3, 5])).toBe(2);
    });

    it('returns null for no repeats', () => {
        expect(firstRepeatedValue([1, 2, 3, 4])).toBe(null);
    });

    it('returns match with only repeats', () => {
        expect(firstRepeatedValue([7, 7])).toBe(7);
    });

    it('returns first time value repeated', () => {
        expect(firstRepeatedValue([3, 1, 2, 1, 3])).toBe(1);
    });
});