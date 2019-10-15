console.log('linked');

//lastIndexOf
var thisIsTheString = 'the quick brown fox jumped over the lazy dog. the dog was very angry at the fox';
var thisIsThePosition = thisIsTheString.lastIndexOf('dog');
document.getElementById('result1').innerHTML = thisIsThePosition;
//the first variable defines the string
//The second one finds the last position of the start of the word in this case
//each item in the string is a character, puncuation mark or space
//this is case sensitive
//it performs the search backwards but returns the value relative to the start


//slice
var thisIsTheString = 'the quick brown fox jumped over the lazy dog. the dog was very angry at the fox';
var thisIsTheSlice = thisIsTheString.slice(3,26);
document.getElementById('result2').innerHTML = thisIsTheSlice;
//the first variable defines the string
//the second uses two parameters, start position and end position
//it then slices everything inbetween the two parameters and extracts it into a new string


//trim
var str = 'the quick brown fox jumped over the lazy dog. the dog was very angry at the fox';
var thisIsTheTrim = str.trim();
document.getElementById('result3').innerHTML = thisIsTheSlice;

//cuts out empty space at the start and end of string. but not inbetween the start and end
