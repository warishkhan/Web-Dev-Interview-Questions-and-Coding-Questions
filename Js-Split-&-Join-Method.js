/*
The split() method in JavaScript is used to divide a string into an array of substrings based on a specified delimiter or separator.
 This method is particularly useful when you want to process individual parts of a string separately.

string.split(separator, limit);

separator: Specifies the character or regular expression to use for splitting the string. 
If omitted, the entire string is returned as a single element array.
limit: An optional integer specifying the maximum number of splits. 
Any leftover text after the final split is not included in the array.


Common Use Cases

1. Splitting a String into Words

Use split(' ') to break a sentence into an array of words.

*/

// const sentence = "JavaScript is a versatile language";
// const words = sentence.split(' ');
console.log(words); // ["JavaScript", "is", "a", "versatile", "language"]

/*
2. Splitting a CSV String into Values

Use split(',') to parse a comma-separated values (CSV) string into individual values.

*/

// const csv = "apple,banana,cherry";
// const fruits = csv.split(',');
console.log(fruits); // ["apple", "banana", "cherry"]

/*

3.Splitting a String by a Specific Character

If a string contains a specific character or sequence that you want to break it by, 
you can pass that character as the separator.

*/

// const data = "name:John|age:30|city:New York";
const details = data.split('|');
console.log(details); // ["name:John", "age:30", "city:New York"]

/*
4.Splitting by Regular Expressions

You can use regular expressions to split a string based on patterns, 
such as splitting by one or more spaces.

*/

const messyString = "Hello    World  Welcome  to JavaScript";
const cleanArray = messyString.split(/\s+/);
console.log(cleanArray); // ["Hello", "World", "Welcome", "to", "JavaScript"]

/*
5.Limiting the Number of Splits

If you only want to get the first few parts of a string, use the limit parameter.

*/
// const sentence = "JavaScript is powerful";
// const parts = sentence.split(' ', 2);
console.log(parts); // ["JavaScript", "is"]

/*
6.Reversing a String

You can use split(), reverse(), and join() together to reverse a string.

*/

// const str = "Hello";
// const reversed = str.split('').reverse().join('');
console.log(reversed); // "olleH"

/*
1. Extracting Domain and Path from a URL
You can split a URL string to extract the domain and path.

*/

const url = "https://www.example.com/path/to/resource";
const parts = url.split('/');
const protocol = parts[0];  // "https:"
const domain = parts[2];    // "www.example.com"
const path = parts.slice(3).join('/'); // "path/to/resource"
console.log(protocol, domain, path); 

/*
2. Splitting a Sentence by Multiple Delimiters
Use a regular expression to split by multiple delimiters such as commas, spaces, or periods.

*/

// const text = "Hello, world! How are you doing today?";
// const words = text.split(/[ ,!?]+/);
console.log(words); // ["Hello", "world", "How", "are", "you", "doing", "today"]

/*
3. Parsing Key-Value Pairs
You can split a string containing key-value pairs separated by a specific character.
*/
const keyValuePairs = "name=John&age=30&city=New York";
const pairs = keyValuePairs.split('&');
// const result = {};
pairs.forEach(pair => {
    const [key, value] = pair.split('=');
    result[key] = value;
});
console.log(result); // {name: "John", age: "30", city: "New York"}

/*

4. Splitting by New Lines
Split a string into an array of lines using the newline character \n.
*/
// const text = "Line1\nLine2\nLine3";
const lines = text.split('\n');
console.log(lines); // ["Line1", "Line2", "Line3"]

/*
5. Splitting a String into Characters
Split a string into individual characters.

*/

const word = "JavaScript";
const characters = word.split('');
console.log(characters); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

/*

6. Counting Words in a Sentence
Count the number of words in a sentence by splitting it into an array and checking the length.

*/

// const sentence = "JavaScript is an amazing language";
const wordCount = sentence.split(' ').length;
console.log(wordCount); // 5

/*
7. Trimming Excess Spaces
Remove leading and trailing spaces from a string using split(), filter(), and join().

*/

const text = "  Hello   World  ";
const trimmed = text.split(' ').filter(Boolean).join(' ');
console.log(trimmed); // "Hello World"

/*
8. Splitting CamelCase or PascalCase Strings
Split a CamelCase or PascalCase string into separate words.
*/

const camelCaseString = "thisIsCamelCase";
// const words = camelCaseString.split(/(?=[A-Z])/);
console.log(words); // ["this", "Is", "Camel", "Case"]

/*
9. Handling Empty Strings with Split
Understanding how split() handles empty strings.
*/
const emptyString = "";
// const result = emptyString.split(',');
console.log(result); // [""]

/*
10. Splitting by a Fixed Length
Split a string into chunks of a fixed length by using a loop with slice() and split().
*/
// const str = "123456789";
const chunkSize = 3;
const chunks = [];

for (let i = 0; i < str.length; i += chunkSize) {
    chunks.push(str.slice(i, i + chunkSize));
}
console.log(chunks); // ["123", "456", "789"]

//////////////////////////////////////JOIN METHOD////////////////////////////////


/*
The join() method in JavaScript is used to combine all the elements of an array 
into a single string, with a specified separator between each element. 
This method is particularly useful when you need to convert an array of strings 
into a single string, with some custom formatting or separation.

array.join(separator);
separator: An optional string that specifies the separator to be placed between array elements in the resulting string. 
If omitted, the elements are joined with a comma (,).

Common Use Cases
1. Combining Array Elements into a Sentence

Use join(' ') to convert an array of words into a sentence.
*/

const words = ["JavaScript", "is", "fun"];
const sentence = words.join(' ');
console.log(sentence); // "JavaScript is fun"

/*

2.Creating a Comma-Separated String

Use join(', ') to create a comma-separated list of items.

*/

const fruits = ["apple", "banana", "cherry"];
const list = fruits.join(', ');
console.log(list); // "apple, banana, cherry"

/*

3.Joining an Array of Numbers

You can join an array of numbers into a string with any separator, or none at all.
*/

const numbers = [1, 2, 3, 4, 5];
const numberString = numbers.join('-');
console.log(numberString); // "1-2-3-4-5"

/*
4. Creating a URL Query String

Use join('&') to convert an array of key-value pairs into a URL query string.
*/
const params = ["name=John", "age=30", "city=New York"];
const queryString = params.join('&');
console.log(queryString); // "name=John&age=30&city=New York"

/*

5. Reversing a String

Use split(), reverse(), and join() together to reverse a string.

*/

const str = "Hello";
const reversed = str.split('').reverse().join('');
console.log(reversed); // "olleH"

/*
6.Formatting an Array of Objects

You can use join() to format an array of objects into a readable string.
*/

const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
const userNames = users.map(user => user.name).join(', ');
console.log(userNames); // "Alice, Bob, Charlie"

/*
7.Joining with a Multicharacter Separator

You can join elements with more complex separators, like " | ".

*/

const elements = ["Element1", "Element2", "Element3"];
const result = elements.join(" | ");
console.log(result); // "Element1 | Element2 | Element3"

/*

8.Creating CSV from an Array of Arrays

Convert a 2D array (array of arrays) into a CSV string.

*/

const data = [
  ["Name", "Age", "City"],
  ["John", "30", "New York"],
  ["Jane", "25", "Los Angeles"]
];
const csv = data.map(row => row.join(',')).join('\n');
console.log(csv);
// Output:
// "Name,Age,City
//  John,30,New York
//  Jane,25,Los Angeles"

/*
9.Flattening a Multidimensional Array

Flatten an array of arrays into a single string with a custom separator.


*/
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatString = nestedArray.map(arr => arr.join('-')).join('; ');
console.log(flatString); // "1-2; 3-4; 5-6"

/*

10.Generating a Path from an Array

Join an array of directory names into a file path.

*/

const pathArray = ["home", "user", "documents", "file.txt"];
const filePath = pathArray.join('/');
console.log(filePath); // "home/user/documents/file.txt"




