const palindromes = function isPalindrome (arr) {
	let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
	array = arr.replace(regex, '');
	array = array.replace(/\s/g, '');
	array = array.toLowerCase();

	const len = array.length;

	if (len <= 1) return true;
	if (array[0] !== array[len - 1]) return false;

	return isPalindrome(array.slice(1, -1));
}
module.exports = palindromes;
