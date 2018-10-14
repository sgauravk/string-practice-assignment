let text = process.argv[2];
let matchText = process.argv[3];
let matchIndex = 0;
let patternCount = 0;
let posOfMatchText = 0;

while (posOfMatchText < matchText.length){
  for (let posOfText = 0; posOfText < text.length; posOfText++){
    if (text[posOfText] == matchText[posOfMatchText]){
      matchIndex++;
      if (posOfMatchText < matchText.length-1){
        posOfMatchText++;
      }
    } else {
      posOfText = posOfText - posOfMatchText;
      posOfMatchText = 0;
      matchIndex = 0;
    }
    if (matchIndex == matchText.length){
      patternCount++;
      matchIndex = 0;
      posOfMatchText = 0;
      posOfText = posOfText - (matchText.length-1);
    }
  }
  posOfMatchText = matchText.length;
}
console.log(patternCount);
