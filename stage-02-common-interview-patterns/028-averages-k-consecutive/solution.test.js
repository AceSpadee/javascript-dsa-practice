import { describe, it, expect } from 'vitest';
import averageKConsecutive from './solution.js';

describe('averageKConsecutive', () => {
    it('return sum of k window', () => {
        expect(averageKConsecutive([1, 2, 3, 4, 5], 3)).toEqual([2, 3, 4]);
    });

    it('return sum of k window with a negative number', () => {
        expect(averageKConsecutive([-2, 0, 2, 4], 2)).toEqual([-1, 1, 3]);
    });

    it('return sum of k window with 1 number', () => {
        expect(averageKConsecutive([5], 1)).toEqual([5]);
    });

    it('return empty array when k is greater than arrays length', () => {
        expect(averageKConsecutive([1, 2], 3)).toEqual([]);
    });

    it('return sum of k window when it matches array length', () => {
        expect(averageKConsecutive([2, 4, 6], 3)).toEqual([4]);
    });

    it('does not modify the original array', () => {
        const numbers = [1, 2, 3, 4, 5];
        averageKConsecutive(numbers, 3);

        expect(numbers).toEqual([1, 2, 3, 4, 5]);
    });
});