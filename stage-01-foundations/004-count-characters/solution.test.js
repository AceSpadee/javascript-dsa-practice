import { describe, it, expect } from 'vitest';
import countCharacters from './solution.js';

describe('countCharacters', () => {
    it('returns number of characters matching target', () => {
        expect(countCharacters('hello', 'l')).toBe(2);
    });

    it('returns 0 when no character match target', () => {
        expect(countCharacters('hello', 'z')).toBe(0);
    });

    it('returns 1 when only one target matches', () => {
        expect(countCharacters('hello', 'h')).toBe(1);
    });

    it('returns number of characters matching case sensitive target', () => {
        expect(countCharacters('hello', 'L')).toBe(0);
    });
});