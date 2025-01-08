/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
const l = console.log;
const tabChar = ' ';
const tabCount = 4;
const indent = (depth) => tabChar.repeat(depth * tabCount);
const states = {
  deleted: 'deleted',
  added: 'added',
  changed: 'changed',
  unchanged: 'unchanged',
  nested: 'nested',
};


const setBrackets = (arr, depth) => `{\n${arr.join('\n')}${indent(depth)}\n}`;

const stringify = (node, depth, sign = ' ') => {
  if (node instanceof Object) {
    const arr = Object.entries(node).map(
      ([k, v]) => `${sign} ${indent(depth)}${k}: ${stringify(v, depth + 1)}`,
    );
    return setBrackets(arr, depth);
  }
  return node;
};

const format = (tree) => {
  const iter = (node, depth) => {
    const resArr = node.map((i) => {
      if (i.type === states.added) {
        return stringify(i, depth, '+');
      }
      return '';
    });

    return setBrackets(resArr, depth);
  };

  return iter(tree, 0);
};

export default format;
