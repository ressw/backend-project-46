/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { readFileSync } from 'fs';
import path from 'path';
import _ from 'lodash';
import shortTree from '../__fixtures__/shortTreeЕxampleObj.js'; // убрать
import parse from './parsers.js';
import buildTree from './treeBuilder.js';
import format from './format/index.js';

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

const genDiff = (filename1, filename2, formatStyle = 'stylish') => {
  const data1 = getData(filename1);
  const data2 = getData(filename2);
  // const tree = buildTree(data1, data2);
  const tree = shortTree;
  const diff = format(tree, formatStyle);
  console.log('diff:');
  console.log();
  console.log(diff);
  return diff;
};

export default genDiff;

// npm install gendiff
// npm link
// gendiff file1.json file2.json
