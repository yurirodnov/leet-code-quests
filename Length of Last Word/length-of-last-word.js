function lengthOfLastWord(s) {
  const splitted = s.trim().split(" ");
  return splitted[splitted.length - 1].length;
}

const answer = lengthOfLastWord("Hello World");
console.log(answer);
