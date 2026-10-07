import { describe, it, expect } from 'vitest';
import isPalindrome from './solution.js';

describe('isPalindrome', () => {
    it('return true if text is palindrome', () => {
        expect(isPalindrome('racecar')).toBe(true);
    });

    it('return true for an even-length palindrome', () => {
        expect(isPalindrome('abba')).toBe(true);
    });

    it('return false if text isnt palindrome ', () => {
        expect(isPalindrome('hello')).toBe(false);
    });

    it('return false if text doesnt match case', () => {
        expect(isPalindrome('Racecar')).toBe(false);
    });

    it('return true if text is one letter', () => {
        expect(isPalindrome('a')).toBe(true);
    });

    it('return true if text is empty', () => {
        expect(isPalindrome('')).toBe(true);
    });
});