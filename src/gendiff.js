/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { readFileSync } from 'fs';
import path from 'path';
import _ from 'lodash';
import parse from './parser.js';
import buildTree from './treeBuilder.js';
import format from './format.js';

const getPath = (filename) => path.resolve(
  process.cwd(),
  '__fixtures__',
  filename,
);
const getExt = (filename) => path.extname(filename).slice(1);
const getData = (filename) => parse(
  readFileSync(getPath(filename), 'utf-8'),
  getExt(filename),
);

const genDiff = (filename1, filename2, formatStyle = '') => {
  const data1 = getData(filename1);
  const data2 = getData(filename2);
  const tree = buildTree(data1, data2);
  // console.log(tree);

  const diff = format(tree, formatStyle);
  // console.log(filename2);

  return tree;
};

export default genDiff;

// gendiff '../__fixtures__/file1.json' '../__fixtures__/file2.json'
