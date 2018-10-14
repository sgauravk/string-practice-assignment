let string=process.argv[2]
let isPalindrome=true;
let indexOfString=0;

while (indexOfString <= string.length/2 && isPalindrome){
  //isPalindrome=false;
  if (string[indexOfString] != string[(string.length-1) - indexOfString]){
    isPalindrome=false;
  } //else {
    //break;
  //}
  indexOfString++;
}
console.log(isPalindrome);
