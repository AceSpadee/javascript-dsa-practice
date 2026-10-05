import { describe, it, expect } from 'vitest';
import removeTarget from './solution.js';

describe('removeTarget', () => {
    it('return cleaned array with no target', () => {
        expect(removeTarget([3, 2, 2, 3], 3)).toEqual([2, 2]);
    });

    it('return cleaned array and keeps order', () => {
        expect(removeTarget([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual([0, 1, 3, 0, 4]);
    });

    it('return same array when no target match', () => {
        expect(removeTarget([1, 2, 3], 5)).toEqual([1, 2, 3]);
    });

    it('return empty array when array contains only target', () => {
        expect(removeTarget([4, 4, 4], 4)).toEqual([]);
    });

    it('return empty array when no array numbers', () => {
        expect(removeTarget([], 2)).toEqual([]);
    });

});