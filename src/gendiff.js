/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { readFileSync } from 'fs';
import path from 'path';
import _ from 'lodash';
import parse from './parser.js';

const getPath = (filename) => path.resolve(process.cwd(), '__fixtures__', filename);
const getExt = (filename) => path.extname(filename).slice(1);
const getData = (filename) => parse(
  readFileSync(getPath(filename), 'utf-8'),
  getExt(filename),
);

const path1 = '../__fixtures__/file1.json';
const path2 = '../__fixtures__/file2.json';

const res = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

const compare = (data1, data2) => {
  const resArr = [];
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = [...keys1, ...keys2];
  console.log(keys);
  console.log('');

  // for (const key of keys) {
  //   if (keys1.includes(key) && !keys2.includes(key)) {
  //     res.push(`- ${key}: ${data1[key]}`);
  //   } else if (!keys1.includes(key) && keys2.includes(key)) {
  //     res.push(`+ ${key}: ${data2[key]}`);
  //   } else {
  //     if (data1[key] === data2[key]) {
  //       res.push(`${key}: ${data1[key]}`);
  //     } else {
  //       res.push(`- ${key}: ${data1[key]}`);
  //       res.push(`+ ${key}: ${data2[key]}`);
  //     }
  //   }
  // }
  console.log(resArr);
};

const genDiff = (filename1 = path1, filename2 = path2, format = '') => {
  const data1 = getData(filename1);
  const data2 = getData(filename2);

  console.log(filename1);
  console.log(filename2);

  // const result = compare(data1, data2);
  return res;
};

export default genDiff;
