/* eslint-disable no-unused-vars */
import _ from 'lodash';

const format = (tree, formatStyle = '') => {
  console.log(tree);
  // console.log(formatStyle);
  const keys = Object.keys(tree);
  console.log(keys);
  if (!_.isObject(tree)) {
    
  }

};

export default format;
