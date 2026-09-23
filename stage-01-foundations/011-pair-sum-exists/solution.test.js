import { describe, it, expect } from 'vitest';
import pairSumExists from './solution.js';

describe('pairSumExists', () => {
    it('returns true when target equals pair', () => {
        expect(pairSumExists([2, 7, 11, 15], 9)).toBe(true);
    });

    it('returns false when no target pair', () => {
        expect(pairSumExists([1, 2, 3, 4], 8)).toBe(false);
    });

    it('returns true when numbers are only pair equaling target', () => {
        expect(pairSumExists([3, 3], 6)).toBe(true);
    });

    it('returns true when target equals pair including negatives', () => {
        expect(pairSumExists([-2, 5, 8, 1], 3)).toBe(true);
    });

    it('returns false when targets dont have pair', () => {
        expect(pairSumExists([3], 6)).toBe(false);
    });
});