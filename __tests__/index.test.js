/* eslint-disable no-undef */
import genDiff from '../index.js';

const filepath1 = '../__fixtures__/file1.json';
const filepath2 = '../__fixtures__/file2.json';
const res = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('genDiff', () => {
  expect(genDiff(filepath1, filepath2)).toEqual(res);
});
// console.log(genDiff(filepath1, filepath2));
