let string=process.argv[2];
let consonantsCounter=0;
let consonants="bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
for (let indexOfString = 0; indexOfString < string.length; indexOfString++){
  for (let indexOfConsonants = 0; indexOfConsonants < consonants.length; indexOfConsonants++){
    if (consonants[indexOfConsonants] == string[indexOfString]){
      consonantsCounter++;
    }
  }
}
console.log(consonantsCounter);
