import { describe, it, expect } from 'vitest';
import longestUniqueSubstring from './solution.js';

describe('longestUniqueSubstring', () => {
    it('return the largest window of unique characters', () => {
        expect(longestUniqueSubstring('abcabcbb')).toBe(3);
    });

    it('return 1 when every character is the same', () => {
        expect(longestUniqueSubstring('bbbbb')).toBe(1);
    });

    it('return the largest window of unique characters when every character is unique', () => {
        expect(longestUniqueSubstring('abcdef')).toBe(6);
    });

    it('return the largest window of unique characters with title casing', () => {
        expect(longestUniqueSubstring('aAabc')).toBe(4);
    });

    it('return 0 when no characters are provided', () => {
        expect(longestUniqueSubstring('')).toBe(0);
    });
});