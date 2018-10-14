let string=process.argv[2];
let intersperseString="";
let comma="";

for (let indexOfString = 0; indexOfString < string.length; indexOfString++){
  intersperseString = intersperseString + comma + string[indexOfString];
  comma = ",";
}
console.log(intersperseString);
