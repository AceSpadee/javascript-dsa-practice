import { describe, it, expect } from 'vitest';
import smallestSubarrayTarget from './solution.js';

describe('smallestSubarrayTarget', () => {
    it('return the smallest window thats sum greater than or equal to target', () => {
        expect(smallestSubarrayTarget([2, 1, 5, 2, 3, 2], 7)).toBe(2);
    });

    it('return 0 when array sum cant equal sum', () => {
        expect(smallestSubarrayTarget([1, 1, 1, 1], 10)).toBe(0);
    });

    it('return 0 when array has no numbers', () => {
        expect(smallestSubarrayTarget([], 5)).toBe(0);
    });

    it('return when the whole array is smallest window', () => {
        expect(smallestSubarrayTarget([2, 3, 4], 9)).toBe(3);
    });

    it('return 1 when value in array is greater than target', () => {
        expect(smallestSubarrayTarget([2, 1, 5, 2, 8], 7)).toBe(1);
    });

    it('does not modify the original array', () => {
        const numbers = [3, 4, 1, 1, 6];

        smallestSubarrayTarget(numbers, 8);

        expect(numbers).toEqual([3, 4, 1, 1, 6]);
    });
});