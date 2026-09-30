import { describe, it, expect } from 'vitest';
import countSharedSingles from './problem-05.js';

describe('countSharedSingles', () => {
    it('returns positive', () => {
        expect(countSharedSingles([1, 2, 3], [2, 3, 4])).toBe(2);
    });

    it('returns nothings', () => {
        expect(countSharedSingles([5, 5, 6], [5, 6, 6])).toBe(0);
    });

    it('returns negative', () => {
        expect(countSharedSingles([-1, 2, -3], [-3, -1, 5])).toBe(2);
    });

});