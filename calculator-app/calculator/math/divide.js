module.exports = function (fnum, snum) {
  let result;
  if(snum === 0) {
    result = 'Can not divide by zero';
  } else {
    result = fnum / snum;
  }
  return result;
};
