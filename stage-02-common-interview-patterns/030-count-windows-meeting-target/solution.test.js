import { describe, it, expect } from 'vitest';
import countWindowsMeetingTarget from './solution.js';

describe('countWindowsMeetingTarget', () => {
    it('return counts that match the windows sum', () => {
        expect(countWindowsMeetingTarget([2, 1, 5, 1, 3, 2], 3, 8)).toBe(2);
    });

    it('return counts that match the windows sum with a negative', () => {
        expect(countWindowsMeetingTarget([-2, 4, 1, 3], 2, 2)).toBe(3);
    });

    it('return counts that match the windows sum with single array number and window', () => {
        expect(countWindowsMeetingTarget([5], 1, 5)).toBe(1);
    });

    it('return 0 when invalid window', () => {
        expect(countWindowsMeetingTarget([1, 2], 3, 2)).toBe(0);
    });

    it('return 0 when no target in the window', () => {
        expect(countWindowsMeetingTarget([1, 1, 1], 2, 5)).toBe(0);
    });

    it('does not modify the original array', () => {
        const numbers = [2, 1, 5, 1, 3, 2];

        countWindowsMeetingTarget(numbers, 3, 8);

        expect(numbers).toEqual([2, 1, 5, 1, 3, 2]);
    });
});