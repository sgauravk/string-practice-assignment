let text = process.argv[2];
let diagraphs = "";
let delimiter = "";

for (let pos = 0; pos < text.length; pos++){
  if (text[pos] == text[pos+1]){
    diagraph = text[pos] + text [pos+1];
    diagraphs = diagraphs + delimiter + diagraph;
    delimiter = ",";
  }
}
console.log(diagraphs);
