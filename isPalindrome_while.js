let text = process.argv[2];
let isPalindrome = true;
let pos = 0;
let middle = text.length/2;

while (pos <= middle && isPalindrome){
  let oppPos = (text.length-1) - pos;
  isPalindrome =  (text[pos] == text[oppPos]);
  pos++;
}
console.log(isPalindrome);
