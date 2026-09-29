import { describe, it, expect } from 'vitest';
import countBelowAverage from './solution.js';

describe('countBelowAverage', () => {
    it('returns how many below average', () => {
        expect(countBelowAverage([1, 2, 3, 4, 5])).toBe(2);
    });

    it('returns 0 when none below average', () => {
        expect(countBelowAverage([10, 10, 10])).toBe(0);
    });

    it('returns how many below average with negative numbers', () => {
        expect(countBelowAverage([-5, -3, -1])).toBe(1);
    });

    it('returns 0 with empty array', () => {
        expect(countBelowAverage([])).toBe(0);
    });

    it('returns all values less with decimal average', () => {
        expect(countBelowAverage([1, 2, 4])).toBe(2);
    });
});