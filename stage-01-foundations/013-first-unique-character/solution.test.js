import { describe, it, expect } from 'vitest';
import firstUniqueCharacter from './solution.js';

describe('firstUniqueCharacter', () => {
    it('returns first character thats unique', () => {
        expect(firstUniqueCharacter('swiss')).toBe('w');
    });

    it('returns first character thats unique', () => {
        expect(firstUniqueCharacter('aabbc')).toBe('c');
    });

    it('returns null when no unique character', () => {
        expect(firstUniqueCharacter('aabbcc')).toBe(null);
    });

    it('returns first character thats unique case sensitive', () => {
        expect(firstUniqueCharacter('aAbBa')).toBe('A');
    });

    it('returns null when no characters', () => {
        expect(firstUniqueCharacter('')).toBe(null);
    });

    it('returns first unique character for numbers', () => {
        expect(firstUniqueCharacter('21')).toBe('2');
    });
});