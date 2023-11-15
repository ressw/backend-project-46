import { Command } from 'commander';

const genDiff = () => {
  console.log();
  const program = new Command();

  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .option('-V, --version', 'output the version number');

  program
    .helpOption('-h, --help', 'output usage information');

  program.parse();
};

export default genDiff;
