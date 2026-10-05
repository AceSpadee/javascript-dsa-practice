import { describe, it, expect } from 'vitest';
import removeDuplicates from './solution.js';

describe('removeDuplicates', () => {
    it('return cleaned array', () => {
        expect(removeDuplicates([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
    });

    it('return single value for only duplicate numbers', () => {
        expect(removeDuplicates([1, 1, 1])).toEqual([1]);
    });

    it('return cleaned arrays with negatives', () => {
        expect(removeDuplicates([-3, -3, -1, 0, 0, 2])).toEqual([-3, -1, 0, 2]);
    });

    it('return same array for 1 number', () => {
        expect(removeDuplicates([5])).toEqual([5]);
    });

    it('return empty array for empty numbers', () => {
        expect(removeDuplicates([])).toEqual([]);
    });
});