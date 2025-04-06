import { describe, it, expect } from 'vitest';
import formatPrice from './formatPrice';

describe('formatPrice', () => {
  const scenarios: { input: number; expected: string }[] = [
    { input: 1_500_000_000_000, expected: '$1.5T' },
    { input: 2_300_000_000_000, expected: '$2.3T' },
    { input: 1_500_000_000, expected: '$2B' },
    { input: 2_300_000_000, expected: '$2B' },
    { input: 9_900_000_000, expected: '$10B' },
    { input: 1_500_000, expected: '$2M' },
    { input: 2_300_000, expected: '$2M' },
    { input: 9_900_000, expected: '$10M' },
    { input: 1_500, expected: '$1.5K' },
    { input: 2_300, expected: '$2.3K' },
    { input: 9_900, expected: '$9.9K' },
    { input: 10, expected: '$10' },
    { input: 99, expected: '$99' },
    { input: 999, expected: '$999' },
    { input: 9.99, expected: '$10.0' },
    { input: 5.67, expected: '$5.7' },
    { input: 1.23, expected: '$1.2' }
  ];

  scenarios.forEach(({ input, expected }) => {
    it(`should format ${input} to ${expected}`, () => {
      const result = formatPrice(input);

      expect(result).toBe(expected);
    });
  });
});
