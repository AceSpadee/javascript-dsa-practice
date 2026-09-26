import { describe, it, expect } from 'vitest';
import secondLargest from './solution.js';

describe('secondLargest', () => {
    it('returns second largest number in array', () => {
        expect(secondLargest([4, 8, 2, 10, 6])).toBe(8);
    });
    
    it('returns second largest number in array with dupes', () => {
        expect(secondLargest([5, 5, 3, 2])).toBe(3);
    });

    it('returns second largest number in array with negatives', () => {
        expect(secondLargest([-10, -3, -20, -5])).toBe(-5);
    });

    it('returns null when all are same', () => {
        expect(secondLargest([7, 7, 7])).toBe(null);
    });

    it('returns null when theres not 2 numbers', () => {
        expect(secondLargest([9])).toBe(null);
    });

    it('returns null when there is no numbers', () => {
        expect(secondLargest([])).toBe(null);
    });
});