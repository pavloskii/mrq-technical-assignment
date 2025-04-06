import { describe, it, expect } from 'vitest';
import combineClasses from './combineClasses';

describe('combineClasses', () => {
  it('should combine multiple classes', () => {
    const expected = 'class1 class2 class3';

    const result = combineClasses('class1', 'class2', 'class3');

    expect(result).toBe(expected);
  });

  it('should conditionally add classes', () => {
    const expected = 'class1';

    const result = combineClasses(true && 'class1');

    expect(result).toBe(expected);
  });

  it('should filter out falsy values', () => {
    const expected = 'class1 class2';

    const result = combineClasses('class1', null, undefined, false, '', 'class2');

    expect(result).toBe(expected);
  });

  it('should return empty string for no arguments', () => {
    const expected = '';

    const result = combineClasses();

    expect(result).toBe(expected);
  });

  it('should return empty string for all falsy values', () => {
    const expected = '';

    const result = combineClasses(null, undefined, false);

    expect(result).toBe(expected);
  });

  it('should preserve whitespace in class names', () => {
    const expected = 'class1 modifier class2';

    const result = combineClasses('class1 modifier', 'class2');

    expect(result).toBe(expected);
  });
});
