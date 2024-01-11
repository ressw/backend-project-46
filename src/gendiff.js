import { program } from 'commander';

const command = (argv) => {
  for (let i = 0; i < argv.length; i += 1) {
    console.log(`Hello, ${argv[i]}!`);
  }
};

const genDiff = () => {
  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .option('-V, --version', 'output the version number')
    .option('-f, --format <type>', 'output format')
    .arguments('<files...>')

    .action(command)
    .parse(process.argv);
};

export default genDiff;

genDiff();
