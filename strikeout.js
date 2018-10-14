let string = process.argv[2];
let letterToReplace = process.argv[3];
let replacedText="";

for (let pos=0; pos<string.length; pos++){
  if (string[pos] == letterToReplace){
    replacedText = replacedText + "-";
  } else{
    replacedText = replacedText + string[pos];
  }
}
console.log(replacedText);

