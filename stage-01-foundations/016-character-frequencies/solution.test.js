import { describe, it, expect } from 'vitest';
import characterFrequencies from './solution.js';

describe('characterFrequencies', () => {
    it('returns object with count', () => {
        expect(characterFrequencies('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    });

    it('returns object with count with repeats', () => {
        expect(characterFrequencies('aabbc')).toEqual({ a: 2, b: 2, c: 1 });
    });

    it('returns separate counts for uppercase and lowercase characters', () => {
        expect(characterFrequencies('AaA')).toEqual({ A: 2, a: 1 });
    });

    it('returns empty object for empty string', () => {
        expect(characterFrequencies('')).toEqual({});
    });
});