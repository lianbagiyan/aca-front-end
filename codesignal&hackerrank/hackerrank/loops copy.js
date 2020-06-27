/*
    Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string s, 
    consisting of lowercase English alphabetic letters (i.e., a through z). 
    The function must do the following:
    -First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, 
    and each vowel must be printed in the same order as it appeared in s.
    -Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it 
    appeared in s.
*/

const vowelsAndConsonants = (string) => {
    let combinationVowels = "aeiou";
  
    for (let letter of string) {
      if (combinationVowels.includes(letter)) {
        console.log(letter);
      }
    }
  
    for (let letter of string) {
      if (!combinationVowels.includes(letter)) {
        console.log(letter);
      }
    }
};
vowelsAndConsonants("javascriptlanguage");