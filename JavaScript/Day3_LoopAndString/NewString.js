//String Method 
/*
const str = "Hello";
console.log(str.charAt(1)); 
// Output: e. Position start from 0.

const st = "Hello"
console.log(st.indexOf('l')) 
//Output:2

const str1 = "Hello";
console.log(str1.charCodeAt(1)); 
// Output: 101


const str2 = "Hello";
const str3 = " World";
console.log(str1.concat(str2)); 
// Output: Hello World
*/

/*
const str4 = "Hello World";
console.log(str4.lastIndexOf("o")); 
// Output: 7


const str5 = "Hello World";
console.log(str5.startsWith("Hello")); 
// Output: true
console.log(str5.startsWith("hello"))
//Output:false. It Give false Because of 'h'.It matches the every Single Character with their ASCII value.

const str6 = "Hello World";
console.log(str6.endsWith("World")); 
// Output: true
console.log(str6.endsWith('world'))
//false

const str7 = "Hello World";
console.log(str7.includes("World")); 
// Output: true
console.log(str7.includes('world'))
//false
const str8 = "world"
console.log(str8.includes('world'))
//true
*/

/*
const str10 = "Hello World";
console.log(str10.slice(5)); 
// Output: World

const str9 = "Hello World";
console.log(str9.substring(0,5)); 
// Output: World

const str11 = "   Hello World   ";
console.log(str11.trim()); 
// Output: Hello World


const str12 = "Hello World";
console.log(str12.replace("World", "Universe")); 
// Output: Hello Universe

const url = "http://shubhamKumar/%20date"
console.log(url.replace('%20' ,'-'))

const str = "The quick brown fox jumps over the lazy dog";
const regex = /[aeiou]/g;
///g=> Global Search
console.log(str.match(regex)); 
// Output: ["e", "u", "i", "o", "o", "u", "o", "e", "a", "o"]
*/

const mood = 'Happy! ';
console.log(`I feel ${mood.repeat(1)}`);
//I feel Happy!  
//Returns a String value that is made from count copies appended together.

const str1 = '12';

console.log(str1.padStart(5, '0'));
// Expected output: "00012"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
console.log(last4Digits)
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
console.log(maskedNumber);