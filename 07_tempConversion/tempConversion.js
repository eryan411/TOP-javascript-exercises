const ftoc = function(num) {
  let convertedTempC = ((num - 32) * (5/9));
  return Math.round(convertedTempC * 10) / 10;
};

const ctof = function(num) {
  let convertedTempF = (num * (9/5) + 32);
  return Math.round(convertedTempF * 10) / 10;
};


module.exports = {
  ftoc,
  ctof
};
