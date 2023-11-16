import { Command } from 'commander';

const genDiff = () => {
  console.log();
  const program = new Command();

  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .option('-V, --version', 'output the version number')
    .option('-f, --format <type>', 'output format');

  program.parse();
};

export default genDiff;
