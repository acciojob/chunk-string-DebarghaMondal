function stringChop(str, size) {
  // your code here
if (str === null || str === '' || isNaN(size)){
	return [];
}
	 return str.match(new RegExp('.{1,' + size + '}', 'g'));
}


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
