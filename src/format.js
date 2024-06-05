/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
import _ from 'lodash';

const res = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

const formatStr = (obj) => {
  if (obj.type === 'deleted') {
    return `  - ${obj.key}: ${obj.value}`;
  }

  if (obj.type === 'added') {
    return `  + ${obj.key}: ${obj.value}`;
  }

  if (obj.type === 'changed') {
    let str = `  - ${obj.key}: ${obj.value}\n`;
    str += `  + ${obj.key}: ${obj.value2}`;
    return str;
  }

  return `    ${obj.key}: ${obj.value}`;
};

const format = (tree, formatStyle = '') => {
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
