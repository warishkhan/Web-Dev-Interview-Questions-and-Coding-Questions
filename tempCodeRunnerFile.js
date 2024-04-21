function countConsonants(str) {
    const matches = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    return matches ? matches.length : 0;
}

// Example usage:
const string = "Hello World";
console.log("Number of consonants in the string:", countConsonants(string));