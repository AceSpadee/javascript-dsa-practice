import { describe, it, expect } from 'vitest';
import removeDuplicates from './solution.js';

describe('removeDuplicates', () => {
    it('returns new array with no duplicates', () => {
        expect(removeDuplicates([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
    });

    it('returns new array with no duplicates when all the same', () => {
        expect(removeDuplicates([2, 2, 2])).toEqual([2]);
    });

    it('returns new array with no duplicates', () => {
        expect(removeDuplicates([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    it('returns new array with no duplicates with negatives', () => {
        expect(removeDuplicates([1, -2, 3, -2, -1])).toEqual([1, -2, 3, -1]);
    });
});