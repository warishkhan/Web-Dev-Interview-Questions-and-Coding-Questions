/*
JavaScript Regular Expressions (regex) are patterns used to match character combinations in strings. 
Regex in JavaScript can be used for searching, extracting, and replacing text. 
Let's break down some basics followed by 25 examples.

Basics of Regular Expressions:


Literals:

/abc/ - Matches the exact sequence "abc".



Metacharacters:

. - Matches any character except newline.
\d - Matches any digit (0-9).
\D - Matches any non-digit character.
\w - Matches any word character (alphanumeric or underscore).
\W - Matches any non-word character.
\s - Matches any whitespace character (space, tab, newline).
\S - Matches any non-whitespace character.
\b - Matches a word boundary.
\B - Matches a non-word boundary.
^ - Matches the beginning of a string.
$ - Matches the end of a string.



Quantifiers:

* - Matches 0 or more occurrences.
+ - Matches 1 or more occurrences.
? - Matches 0 or 1 occurrence.
{n} - Matches exactly n occurrences.
{n,} - Matches n or more occurrences.
{n,m} - Matches between n and m occurrences.



Groups and Ranges:

(abc) - Matches and remembers "abc".
(?:abc) - Matches "abc" but does not remember the match.
[abc] - Matches any one of "a", "b", or "c".
[^abc] - Matches anything except "a", "b", or "c".
[a-z] - Matches any lowercase letter from "a" to "z".
[A-Z] - Matches any uppercase letter from "A" to "Z".
[0-9] - Matches any digit from "0" to "9".


Escape Characters:

\ - Escapes a special character (e.g., \. matches a literal period).

1. Matching a Literal String

/hello/.test("hello world"); // true

Explanation:

/hello/ is a regular expression that looks for the exact string "hello".
.test() checks if the pattern matches anywhere in the string "hello world".
Since "hello" is present, it returns true.

2. Matching a Digit

/\d/.test("abc123"); // true

Explanation:

\d matches any digit (0-9).
.test() checks if there's at least one digit in the string "abc123".
Since "123" contains digits, it returns true.

3. Matching a Non-Digit

/\D/.test("123"); // false

Explanation:

\D matches any non-digit character.
.test() checks if there's any non-digit in "123".
Since "123" consists only of digits, it returns false.

4. Matching a Word Character

/\w/.test("_hello123"); // true

Explanation:

\w matches any alphanumeric character or underscore.
.test() checks if there's at least one word character in "_hello123".
Since "_hello123" has underscores and letters, it returns true.

5. Matching a Non-Word Character

/\W/.test("!@#"); // true

Explanation:

\W matches any character that is not a word character.
.test() checks if there's any non-word character in "!@#".
Since "!@#" consists of symbols, it returns true.

6. Matching Whitespace

/\s/.test("hello world"); // true

Explanation:

\s matches any whitespace character (spaces, tabs, newlines).
.test() checks if there's any whitespace in "hello world".
Since "hello world" contains a space, it returns true.

7. Matching Non-Whitespace

/\S/.test(" "); // false

Explanation:

\S matches any non-whitespace character.
.test() checks if there's any non-whitespace character in " ".
Since " " is a space, it returns false.

8. Matching Any Character

/./.test("abc"); // true

Explanation:

. matches any single character except newline.
.test() checks if there's at least one character in "abc".
Since "abc" contains characters, it returns true.

9. Beginning of String Match

/^hello/.test("hello world"); // true

Explanation:

^ asserts the position at the start of the string.
/^hello/ matches "hello" only if it's at the beginning of the string.
Since "hello world" starts with "hello", it returns true.

10. End of String Match

/world$/.test("hello world"); // true

Explanation:

$ asserts the position at the end of the string.
/world$/ matches "world" only if it's at the end of the string.
Since "hello world" ends with "world", it returns true.

11. Zero or More Occurrences

/a* /.test("aaab"); // true

Explanation:

 * matches 0 or more occurrences of the preceding character (in this case, "a").
/a* / matches any number of "a"s, including none.
 Since "aaab" has "aaa", it returns true.

12. One or More Occurrences

/a+/.test("bbb"); // false

Explanation:

+ matches 1 or more occurrences of the preceding character.
/a+/ looks for one or more "a"s.
Since "bbb" has no "a"s, it returns false.

13. Zero or One Occurrence

/colou?r/.test("color"); // true

Explanation:

? makes the preceding character optional.
/colou?r/ matches "color" or "colour".
Since "color" matches, it returns true.

14. Exact Number of Occurrences

/\d{4}/.test("2024"); // true

Explanation:

{4} specifies exactly 4 occurrences of the preceding character (digits in this case).
/\d{4}/ matches exactly four digits.
Since "2024" has exactly four digits, it returns true.

15. Range of Occurrences

/\d{2,4}/.test("2024"); // true

Explanation:

{2,4} specifies between 2 and 4 occurrences.
/\d{2,4}/ matches 2 to 4 digits.
Since "2024" has four digits, it returns true.

16. Character Set

/[aeiou]/.test("hello"); // true

Explanation:

[aeiou] matches any single character in the set of vowels.
.test() checks if there's at least one vowel in "hello".
Since "hello" contains vowels, it returns true.

17. Negated Character Set

/[^aeiou]/.test("hello"); // true

Explanation:

[^aeiou] matches any single character not in the set of vowels.
.test() checks if there's at least one non-vowel character in "hello".
Since "hello" contains consonants, it returns true.

18. Range in Character Set

/[a-z]/.test("A"); // false

Explanation:

[a-z] matches any lowercase letter from "a" to "z".
.test() checks if "A" is a lowercase letter.
Since "A" is uppercase, it returns false.

19. Matching Group

/(abc)/.test("abcabc"); // true

Explanation:

(abc) is a capturing group that matches "abc".
.test() checks if the string contains "abc".
Since "abcabc" contains "abc", it returns true.

20. Non-Capturing Group

/(?:abc)/.test("abcabc"); // true

Explanation:

(?:abc) is a non-capturing group that matches "abc" but doesn’t remember it.
.test() checks if the string contains "abc".
Since "abcabc" contains "abc", it returns true.

21. Word Boundary

/\bword\b/.test("wordplay"); // false

Explanation:

\b asserts a word boundary.
/\bword\b/ matches "word" only if it is a whole word.
Since "word" is part of "wordplay", it returns false.

22. Non-Word Boundary

/\Bword/.test("playword"); // true

Explanation:

\B asserts a non-word boundary.
/\Bword/ matches "word" only if it's not a whole word.
Since "word" is part of "playword", it returns true.

23. Escape Special Character

/\./.test("1.5"); // true

Explanation:

\. escapes the special character "." to match a literal period.
.test() checks if there's a literal period in "1.5".
Since "1.5" contains a period, it returns true.

24. OR Condition

/cat|dog/.test("I have a cat"); // true

Explanation:

cat|dog matches either "cat" or "dog".
.test() checks if the string contains either "cat" or "dog".
Since "I have a cat" contains "cat", it returns true.

25. Replace Text Using Regex

"2024-08-21".replace(/-/g, "/"); // "2024/08/21"

Explanation:

/-/g matches all hyphens in the string (the g flag indicates a global search).
.replace() replaces each hyphen with a slash.
The result is "2024/08/21".



Use in JavaScript Functions:

test() - Tests for a match in a string.
match() - Returns an array of matches.
replace() - Replaces matches in a string.
split() - Splits a string by the matches of the regex.

Regular expressions are powerful tools in JavaScript for handling text.
 By combining different patterns and quantifiers, 
 you can solve many common string manipulation tasks efficiently.

*/