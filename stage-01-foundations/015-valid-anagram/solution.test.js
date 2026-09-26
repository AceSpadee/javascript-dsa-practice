import { describe, it, expect } from 'vitest';
import validAnagram from './solution.js';

describe('validAnagram', () => {
    it('returns true when anagram valid', () => {
        expect(validAnagram('listen', 'silent')).toBe(true);
    });

    it('returns false when anagram not valid', () => {
        expect(validAnagram('hello', 'world')).toBe(false);
    });

    it('returns true when anagram valid with only dupes', () => {
        expect(validAnagram('aabb', 'bbaa')).toBe(true);
    });

    it('returns false when anagram invalid', () => {
        expect(validAnagram('aab', 'abb')).toBe(false);
    });

    it('returns true when anagram valid including empty strings', () => {
        expect(validAnagram('', '')).toBe(true);
    });

    it('returns false when character casing differs', () => {
        expect(validAnagram('Abc', 'abc')).toBe(false);
    });
});