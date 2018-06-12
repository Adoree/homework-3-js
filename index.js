//1
const splitAndMerge = (str, s) => str.split(' ').map(word => word.split('').join(s)).join(' ');

splitAndMerge("My name is John", " ") // "M y n a m e i s J o h n"
splitAndMerge("Hello World!", ",") // "H,e,l,l,o W,o,r,l,d,!"

//2
const convert = (obj) => Object.entries(obj);

//3
const toCamelCase = (str) => {
	let newStr = str.split('-');

	for (let i = 1; i < newStr.length; i++) {
		newStr[0] = newStr[0][0].toUpperCase() + newStr[0].slice(1);
	}

	return newStr.join('');
}

toCamelCase("the-stealth-warrior"); // theStealthWarrior

//4
const reverse = (str) => str.split(' ').map(word => word.split('').reverse().join('')).join(' ');

reverse("A fun little challenge!"); // A nuf elttil !egnellahc

//5
const stringExpansion = (str) => {
	let num = null;
	let newStr = '';

	for (let i = 0; i < str.length; i++) {

		if (!isNaN(str[i])) {
			num = str[i];
			continue;
		}

		if (num) {	
			for (let j = 0; j < num; j++) {
				newStr += str[i];
			}
		} 

		if (!num) newStr += str[i];

		num = null;
	}

	return newStr;
};

stringExpansion('3D2a5d2f'); // DDDaadddddff
stringExpansion('3d332f2a'); // dddffaa
stringExpansion('abcde'); // abcde