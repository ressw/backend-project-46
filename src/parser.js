export default (data, format = '') => {
  if (format === 'json') {
    return JSON.parse(data);
  }
  return JSON.parse(data);
};
