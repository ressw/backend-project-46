/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
const l = console.log;
const idn = ' ';
const depth = 0;
l();

const objLog = (key, val) => {
  const s = typeof val === 'object' ? objLog(key, val) : ` ${key}: ${val}\n`;
};

const objToStr = (data, depth) => {
  if (data instanceof Object) {
    const result = Object.entries(data).flatMap(
      ([key, value]) => `${getKeyIndent(depth, key)}${stringify(value, depth + 1)}`,
    );
    return join(result, depth);
  }
  return data;
};

const format = (tree) => {
  const iter = (node, depth) => {
    const resArr = node.map((i) => {
      console.log('i.type:', i.type);
      if (typeof i.type !== 'nested') {
        console.log('i.type 2:', i.type);
        const str = `${i.key}: ${iter(i.value, depth + 1)}\n`;
        resArr.push(str);
      }
    });

    const res = resArr.join('||||');
    console.log('resArr:', resArr);
    console.log('res:', res);
    return res;
  };

  console.log('==============');
  return iter(tree, depth);
};

export default format;
