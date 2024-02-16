/* eslint-disable no-unused-vars */
import { program } from 'commander';
import { readFileSync } from 'fs';
import path from 'path';
import parse from './parser.js';

const getData = (filename) => {
  const getFixturePath = path.resolve(process.cwd(), '__fixtures__', filename);
  return {
    str: readFileSync(getFixturePath, 'utf-8'),
    ext: path.extname(filename),
  };
};

export const genDiff = (filename1, filename2, format = '') => {
  const { str: str1, ext: ext1 } = getData(filename1);
  const { str: str2, ext: ext2 } = getData(filename2);
  const data1 = parse(str1);
  const data2 = parse(str2);
  console.log(data1);
  console.log(ext1);
  console.log(data2);
  console.log(ext2);
};

export default () => {
  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .option('-V, --version', 'output the version number')
    .option('-f, --format <type>', 'output format')
    .arguments('<filepath1>, <filepath2>', 'filenames')
    .action((filename1, filename2, keys) => {
      // console.log(genDiff(filename1, filename2, keys.format));
      genDiff(filename1, filename2, keys.format);
    })
    .parse();
};
