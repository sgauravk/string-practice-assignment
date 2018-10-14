let string=process.argv[2];
stripString="";

for (let indexOfString=0; indexOfString < string.length; indexOfString++){
  if (string[indexOfString] != " "){
    stripString = stripString + string[indexOfString];
  }
}
console.log(stripString)
