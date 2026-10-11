import { describe, it, expect } from 'vitest';
import firstValueExactlyTwice from './solution.js';

describe('firstValueExactlyTwice', () => {
    it('return first value thats repeated twice', () => {
        expect(firstValueExactlyTwice([4, 2, 4, 2, 3])).toBe(4);
    });

    it('return null when it repeats 3 values', () => {
        expect(firstValueExactlyTwice([5, 5, 5, 2])).toBe(null);
    });

    it('return null when it doesnt contain 2 repeats', () => {
        expect(firstValueExactlyTwice([7, 8, 9])).toBe(null);
    });

    it('return first value thats repeated twice with negatives', () => {
        expect(firstValueExactlyTwice([-2, 1, -2, 3])).toBe(-2);
    });

    it('return null with empty array', () => {
        expect(firstValueExactlyTwice([])).toBe(null);
    });

    it('does not modify the original array', () => {
        const numbers = [1, 2, 2, 3, 3];
        firstValueExactlyTwice(numbers);

        expect(numbers).toEqual([1, 2, 2, 3, 3]);
    });
});