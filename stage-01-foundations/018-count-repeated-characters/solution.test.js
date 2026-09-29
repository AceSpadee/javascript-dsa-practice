import { describe, it, expect } from 'vitest';
import countRepeatedCharacters from './solution.js';

describe('countRepeatedCharacters', () => {
    it('returns only repeated character count', () => {
        expect(countRepeatedCharacters('aabbc')).toBe(2);
    });

    it('returns 1 with only same text', () => {
        expect(countRepeatedCharacters('aaaa')).toBe(1);
    });

    it('returns 0 with no repeats', () => {
        expect(countRepeatedCharacters('abc')).toBe(0);
    });

    it('returns 1 for repeats that match character case', () => {
        expect(countRepeatedCharacters('aAaa')).toBe(1);
    });

    it('returns 0 with no characters', () => {
        expect(countRepeatedCharacters('')).toBe(0);
    });

});