import { describe, it, expect } from 'vitest';
import longestSubstringAtMostKDistinct from './solution.js';

describe('longestSubstringAtMostKDistinct', () => {
    it('returns the longest window containing only k unique values', () => {
        expect(longestSubstringAtMostKDistinct('eceba', 2)).toBe(3);
    });

    it('returns the longest window containing only k unique values', () => {
        expect(longestSubstringAtMostKDistinct('aaabbcc', 2)).toBe(5);
    });
    
    it('returns the whole string if text has only k amount of unique characters', () => {
        expect(longestSubstringAtMostKDistinct('abc', 3)).toBe(3);
    });

    it('returns the longest window containing only k unique values', () => {
        expect(longestSubstringAtMostKDistinct('abc', 1)).toBe(1);
    });

    it('returns the 0 when text is empty', () => {
        expect(longestSubstringAtMostKDistinct('', 2)).toBe(0);
    });
});