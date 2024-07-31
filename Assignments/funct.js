// Find the Largest Number
// Description: Write a function findLargest that takes three numbers as arguments and returns the largest of the three.
console.log("******************Largest of 3 no****************************** ");
function findLargest(a, b, c) {
   if(a > b && a > c)
   return a;
   else if(b > c)
   {
    return b;
   }
   else
   { return c;}
}

console.log(findLargest(5, 10, 3)); // Output: 10
console.log(findLargest(8, 2, 6)); // Output: 8
console.log("******************Reverse words in a sentence****************************** ");

// Reverse Words in a Sentence
// Description: Write a function reverseWords that takes a string as an argument and returns
//  a new string where the order of the words in the sentence are reversed, 
//  but the words themselves aren't.

function reverseWords(sentence) {

    const rev = sentence.split(" ");
    return (rev.reverse().join(" "));
//    let len = sentence.length;
//    let reverse = "";
//    for(let i = len-1; i >= 0 ; i--)
//     {
//    reverse = reverse + sentence[i];
//     }
//     return reverse;

//console.log (rev);
//for(let i = 0 ;i<rev.length; i++)
//{
    
    //rev
//}

}


 console.log(reverseWords("Hello world!")); // Output: "world! Hello"
 console.log(reverseWords("The quick brown fox")); // Output: "fox brown quick The"
 console.log(reverseWords("JavaScript is fun")); // Output: "fun is JavaScript"

// Find the Longest Word in an Array
// Description: Write a function findLongestWord that takes an array of strings as 
// an argument and returns the longest word in the array. If there are multiple words with the same length, return the first one.
console.log("*******************Find the Longest Word in an Array***************************** ");
function findLongestWord(words) {
    // Your code here
    let len = words.length;
    //const long = []
    let max = 0;
    let maxword = ""
    for(let i = 0;i<len; i ++)
    {
        //console.log(words[i].length)
        if(words[i].length > max )
        { 
            max = words[i].length
            maxword = words[i];

        }
        
    }
    return maxword;
   

}

console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // Output: "banana"
console.log(findLongestWord(["dog", "elephant", "cat"])); // Output: "elephant"
console.log(findLongestWord(["red", "blue", "green"])); // Output: "green"

// Count Occurrences of Words in a Sentence
// Description: Write a function countWords that takes a string sentence as
//  an argument and returns an object where each key is a word in the sentence and the
//   corresponding value is the number of times that word appears in the sentence.
console.log("*******************Count Occurrences of Words in a Sentence***************************** ");


function countWords(sentence) {
        // Your code here
 
  const c = sentence.split(" ");
  console.log(c);
  const result = {};
  let count = 0;
  for(let i = 0; i <= c.length-1;i++)
{
    count = 1;
    for(let j = i; j <= c.length-1;j++)

    {
        console.log("((((((((((((((")
        console.log(c[i] , c[j]);
        if(c[i] === c[j])
        
        count ++; 
    console.log(count); break;
    }
    let text = c[i];
    console.log(text);
    result.text = count;
    console.log(c[i]);

}

console.log(result);
return c;
}

 console.log(countWords("hello world hello")); 
// // Output: { hello: 2, world: 1 }

// console.log(countWords("this is a test this is only a test")); 
// // Output: { this: 2, is: 2, a: 2, test: 2, only: 1 }