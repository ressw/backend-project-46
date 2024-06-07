/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
import _ from 'lodash';

const formatStr = (obj) => {
  const baseStr1 = `${obj.key}: ${obj.value}`;

  if (obj.type === 'deleted') return `  - ${baseStr1}`;
  if (obj.type === 'added') return `  + ${baseStr1}`;

  if (obj.type === 'changed') {
    return `  - ${baseStr1}\n  + ${obj.key}: ${obj.value2}`;
  }

  return `    ${baseStr1}`;
};

const format = (tree, formatStyle = 'stylish') => {
  const result = [];
  for (const item of tree) {
    if (_.isObject(item)) {
      result.push(formatStr(item));
    }
  }
  const str = `{\n${result.join('\n')}\n}`;
  return str;
};

export default format;
