/* eslint-disable no-unused-vars */
import { program } from 'commander';
import path from 'path';
import { readFileSync } from 'fs';

const getData = (filename) => {
  const getFixturePath = path.resolve(process.cwd(), '__fixtures__', filename);
  return readFileSync(getFixturePath, 'utf-8');
};

const command = (filename1, filename2, format = '') => {
  const data1 = getData(filename1);
  const data2 = getData(filename2);
  console.log(data1);
  console.log(data2);
  console.log(format);
};

const genDiff = () => {
  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .option('-V, --version', 'output the version number')
    .option('-f, --format <type>', 'output format')
    .arguments('<filepath1>, <filepath2>', 'filenames')
    .action((filename1, filename2, keys) => {
      command(filename1, filename2, keys.format);
    })
    .parse();
};

export default genDiff;

// genDiff();
