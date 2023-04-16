//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  return str.length;
}
//count the number of vowels in the given String and return the value
const countVowels = (str) => {
  let count=0;
  for (let index = 0; index < str.length; index++) {
   if (str[index]=='a'||str[index]=='A'||str[index]=='e'
   ||str[index]=='E'||str[index]=='i'||str[index]=='I'||
   str[index]=='o'||str[index]=='O'||str[index]=='u'||str[index]=='U') {
    count++;
   }
    
  }
 return count;
}

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  return str.includes(checkStr);
}

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  return str.replace(wordToBeReplaced, replaceWord);
}

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
  
  let stringArray=str.split(' ');
   let largest=stringArray[0];
   stringArray.map((word)=>{
    if (word.length>largest.length) {
      largest=word;
      
    }
   });
   return largest;
}


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}