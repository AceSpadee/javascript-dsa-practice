import { describe, it, expect } from 'vitest';
import rangeSumQueries from './solution.js';

describe('rangeSumQueries', () => {
    it('returns the sums for the provided query ranges', () => {
        expect(rangeSumQueries([2, 4, 1, 5, 3], [[0, 2], [1, 3], [2, 4]])).toEqual([7, 10, 9]);
    });

    it('returns the value when start and end are the same index', () => {
        expect(rangeSumQueries([5, 10, 15], [[0, 0]])).toEqual([5]);
    });

    it('returns the sums for the provided query ranges', () => {
        expect(rangeSumQueries([5, 10, 15], [[0, 2]])).toEqual([30]);
    });

    it('returns an empty array when numbers and queries are empty', () => {
        expect(rangeSumQueries([], [])).toEqual([]);
    });

    it('does not modify the original array', () => {
        const numbers = [2, 4, 1, 5, 3];

        rangeSumQueries(numbers, [[0, 2], [1, 3]]);

        expect(numbers).toEqual([2, 4, 1, 5, 3]);
    });
});