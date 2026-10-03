import { describe, it, expect } from 'vitest';
import moveZeroes from './solution.js';

describe('moveZeroes', () => {
    it('return same array with 0 moved', () => {
        expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
    });

    it('returns with all 0 at end', () => {
        expect(moveZeroes([0, 0, 1])).toEqual([1, 0, 0]);
    });

    it('returns same array with no 0', () => {
        expect(moveZeroes([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('returns same array with only 0', () => {
        expect(moveZeroes([0])).toEqual([0]);
    });

    it('return empty array when empty', () => {
        expect(moveZeroes([])).toEqual([]);
    });

});