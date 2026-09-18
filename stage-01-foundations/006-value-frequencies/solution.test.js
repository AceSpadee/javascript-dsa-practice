import { describe, it, expect } from 'vitest';
import valueFrequencies from './solution.js';

describe('valueFrequencies', () => {
    it('returns object with value of number frequency', () => {
        expect(valueFrequencies([1, 2, 2, 3, 1, 1])).toEqual({1: 3, 2: 2, 3: 1});
    });

    it('returns object with value of number frequency with same number', () => {
        expect(valueFrequencies([3, 3, 3, 3])).toEqual({3: 4});
    });

    it('returns object with value of number frequency with all unique', () => {
        expect(valueFrequencies([1, 2, 3])).toEqual({1: 1, 2: 1, 3: 1});
    });

    it('returns empty object for no numbers provided', () => {
        expect(valueFrequencies([])).toEqual({});
    });
});