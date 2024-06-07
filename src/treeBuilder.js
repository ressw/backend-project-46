import _ from 'lodash';

const buildTree = (data1, data2) => {
  let obj = {};
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const isNested = (o, label) => (_.isObject(o) ? 'nested' : label);
  const res = keys.map((key) => {
    obj = {};
    obj.key = key;

    if (!Object.hasOwn(data2, key)) {
      obj.value = data1[key];
      obj.type = isNested(data1[key], 'deleted');
      return obj;
    }

    if (!Object.hasOwn(data1, key)) {
      obj.value = data2[key];
      obj.type = isNested(data1[key], 'added');
      return obj;
    }

    if (data1[key] !== data2[key]) {
      obj.value = data1[key];
      obj.value2 = data2[key];
      obj.type = 'changed';
      return obj;
    }

    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      obj.type = 'nested';
      obj.value = buildTree(data1[key], data2[key]);
      return obj;
    }

    obj.type = 'unchanged';
    obj.value = data1[key];

    return obj;
  });

  // console.log(JSON.stringify(res, null, 2));
  return _.sortBy(res, (i) => i.key);
};

export default buildTree;
