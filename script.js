function firstNonRepeatedChar(str) {
 // Write your code here
	let str =str.toLowerCase();
	for(let i=0; i<=str.length; i++ ){
	if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
    return str[i];
	}
	
}
return null;
}
let output =firstNonRepeatedChar();
console.log(output);
const input = prompt("Enter a string");
/*((firstNonRepeatedChar(input));
