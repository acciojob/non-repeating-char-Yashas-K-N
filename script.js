function firstNonRepeatedChar(string) {
   for (let i = 0; i < string.length; i++) {
       const char = string.charAt(i);
       if (string.indexOf(char) === i && string.indexOf(char, i + 1) === -1) {
           return char;
       }
   }
   return null;
}

// Example usage:
const inputString = "snbdkbakbkaa";
const result = firstNonRepeatedChar(inputString);
console.log(`First non-repeated character: ${result}`);
