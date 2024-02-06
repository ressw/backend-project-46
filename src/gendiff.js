import { program } from 'commander';

const command = (filename1, filename2, format = '') => {
  console.log(filename1, filename2, format);
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
