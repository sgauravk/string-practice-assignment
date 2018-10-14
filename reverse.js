let string=process.argv[2];
reverseString="";

for (let indexOfString = string.length-1; indexOfString >= 0; indexOfString--){
  reverseString = reverseString + string[indexOfString]
}

console.log(reverseString);
