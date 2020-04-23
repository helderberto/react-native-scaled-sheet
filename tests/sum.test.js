import { sum } from '../src';

describe('sum', () => {
  test('it should sum 2 + 2', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
