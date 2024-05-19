/* eslint-disable no-undef */
import genDiff from '../index.js';

test('test genDiff', () => {
  const res = genDiff();
  expect(res).toBe('');
});
