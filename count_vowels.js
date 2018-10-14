let string=process.argv[2];

const vowelsCount = function(string){
  let vowelsCounter=0;
  let vowels="aeiouAEIOU";
  for (let indexOfString = 0; indexOfString < string.length; indexOfString++){
    for (let indexOfVowels = 0; indexOfVowels < vowels.length; indexOfVowels++){
      if (vowels[indexOfVowels] == string[indexOfString]){
        vowelsCounter++;
      }
    }
  }
  return vowelsCounter;
}
vowelsCounter = vowelsCount(string);
console.log(vowelsCounter);
