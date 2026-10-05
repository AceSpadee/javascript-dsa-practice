import { describe, it, expect } from 'vitest';


describe('moveZeroes', () => {
    it('return same array with 0 moved', () => {
        expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
    });

});