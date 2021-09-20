const fibonacci = function(num) {
	let x = 1;
	let y = 0;
	let temp;

	while (num >= 1) {
	  temp = x;
	  x = x + y;
	  y = temp;
	  num--;
}
	if (num >= 0) {
	  return y;
}	else {
	  return "OOPS"
}
};

module.exports = fibonacci;
