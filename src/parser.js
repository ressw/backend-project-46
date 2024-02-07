import path from 'path';
import { readFileSync } from 'fs';

export default (filename) => {
  const getFixturePath = path.resolve(process.cwd(), '__fixtures__', filename);
  const data = readFileSync(getFixturePath, 'utf-8');
  return JSON.parse(data);
};
