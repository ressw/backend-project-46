/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
import _ from 'lodash';

const l = console.log;
const idn = ' ';
l();

const objLog = (key, val) => {
  const s = typeof val === 'object'
    ? objLog(key, val)
    : ` ${key}: ${val}\n`;
};

const stylish = (tree, deep) => {
  if (typeof tree !== 'object') return `${tree}\n`;

  if (tree.type === 'nested') {
    const res = stylish(tree.value, deep + 1);
    const str = `${idn.repeat(deep)}${tree.key}: {\n`
    + `${res}${idn.repeat(deep)}}\n`;
    return str;
  }

  if (tree.type === 'deleted') {
    const res = stylish(tree.value, deep);
    return `${idn.repeat(deep)}- ${tree.key}: ${res}`;
  }

  if (tree.type === 'added') {
    const res = stylish(tree.value, deep);
    return `${idn.repeat(deep)}+ ${tree.key}: ${res}`;
  }

  if (tree.type === 'changed') {
    const res = stylish(tree.value, deep + 1);
    return `${idn.repeat(deep)}  ${tree.key}: ${res}`;
  }

  if (tree.type === 'unchanged') {
    const res = stylish(tree.value, deep + 1);
    return `${idn.repeat(deep)}  ${tree.key}: ${res}`;
  }

  if (Array.isArray(tree)) {
    return tree.flatMap((i) => stylish(i, deep + 1)).join('');
  }

  if (!tree.key) {
    return Object.keys(tree).map((i) => stylish(i, deep + 1)).join('ere');
  }

  const res = stylish(tree.value, deep);
  return `${idn.repeat(deep)}${tree.key}==: ${res}`;
};

const format = (tree, formatStyle = 'stylish') => {
  const deep = 0;
  const formatRes = stylish(tree, deep);
  l();
  l(formatRes);
  l();
  return formatRes;
};

export default format;
