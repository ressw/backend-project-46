import stylishFormat from './stylish.js';
// import stylishFormat from './stylish2.js';
import plainFormat from './plain.js';

const formatStyle = {
  stylish: stylishFormat,
  plain: plainFormat,
};

export default (data, formatName) => {
  if (formatStyle[formatName]) {
    const res = formatStyle[formatName](data);
    // console.log('index =', res);
    return res;
  }
  throw new Error('Неизвестный формат');
};
