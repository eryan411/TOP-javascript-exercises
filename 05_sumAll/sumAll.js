const sumAll = function(x, y) {

  if (x > 0 && y>0 && typeof x === 'number' && typeof y === 'number'){
    let valuex = x;
    let valuey = y;
    let sumInt = 0;
    
    if (x < y);
      for (let i = valuex; i <= valuey; i++) {
        sumInt += i;
      } 

    if (y < x);
      for (let i = valuey; i <= valuex; i++) {
        sumInt += i;
      } 
  
    return sumInt;
  }

  else {
    return 'ERROR'
  }
};

module.exports = sumAll;
