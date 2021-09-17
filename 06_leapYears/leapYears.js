const leapYears = function(year) {

  const ParameterOne = year % 4 == 0;
  const ParameterTwo = year % 100 == 0 && year % 400 != 0;



  if (!ParameterOne || ParameterTwo) {
    return false;
  }
  else {
    return true;
  }

};

module.exports = leapYears;
