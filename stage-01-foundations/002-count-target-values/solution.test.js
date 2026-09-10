import { describe, it, expect } from 'vitest';
import countTarget from './solution.js';

describe('countTarget', () => {
    it('return the count of target matches', () => {
        expect(countTarget([1, 2, 3, 2, 4, 2], 2)).toBe(3);
    });

    it('returns 0 when the target does not appear', () => {
        expect(countTarget([1, 2, 3], 7)).toBe(0);
    });

    it('returns 1 when the target appears once', () => {
        expect(countTarget([3], 3)).toBe(1);
    });

    it('returns the count when the target is negative', () => {
        expect(countTarget([-1, -2, -3, -3, -4], -3)).toBe(2);
    });
});