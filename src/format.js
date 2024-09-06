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
    // l('tree.key:', tree.key);
    return str;
  }

  // if (tree.type === 'deleted') {
  //   let res = stylish(tree.value, deep + 1);
  //   // res = JSON.stringify(res);
  //   return `${idn.repeat(deep)}${tree.key}: ${res}`;
  // }

  if (tree.type === 'added') {
    const res = stylish(tree.value, deep);
    return `${idn.repeat(deep)}${tree.key}: ${res}`;
  }

  // if (tree.type === 'changed') {
  //   let res = stylish(tree.value, deep + 1);
  //   // res = JSON.stringify(res);
  //   return `${idn.repeat(deep)}${tree.key}: ${res}`;
  // }

  // if (tree.type === 'unchanged') {
  //   let res = stylish(tree.value, deep + 1);
  //   // res = JSON.stringify(res);
  //   return `${idn.repeat(deep)}${tree.key}: ${res}`;
  // }

  if (Array.isArray(tree)) {
    return tree.flatMap((i) => stylish(i, deep + 1)).join('');
  }

  // return `${idn.repeat(deep)}${JSON.stringify(tree)}`;
  // return `${idn.repeat(deep)}${tree}`;
  return `${idn.repeat(deep)}${tree.key}: ${tree.value}\n`;
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
