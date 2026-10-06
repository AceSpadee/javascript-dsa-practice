import { describe, it, expect } from 'vitest';
import reverseArray from './solution.js';

describe('reverseArray', () => {
    it('return reversed array', () => {
        expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    });

});