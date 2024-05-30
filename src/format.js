/* eslint-disable no-unused-vars */
import _ from 'lodash';

const formatStr = (obj) => {
  if (obj.type === 'deleted') {
    return `- ${obj.key}: ${obj.value}`;
  }

  if (obj.type === 'added') {
    return `+ ${obj.key}: ${obj.value}`;
  }

  return ` ${obj.key}: ${obj.value}`;
};

const format = (tree, formatStyle = '') => {
  console.log(tree);
  // console.log(formatStyle);
  const keys = Object.keys(tree);
  const result = [];
  let str = '';
  console.log(keys);
  if (!_.isObject(tree)) {
    str += formatStr(tree);
  }
};

export default format;
