// Task 1: Character Finder

//   - Takes a string 'JavaScript'
var str="javaScript"
//    • The character at index 4
console.log(str.charAt(4))
//    • The ASCII value of the character at index 2
console.log(str.charCodeAt(2))
//    • The last character using a negative index with .at()
console.log(str.at(-1))

// Task 2: Combine & Search

//  - Combines 'Hello' and 'World' using concat()
var s1="Hello"
var s2="World"
console.log(s1.concat(s2))
//  - Checks if the final string includes 'lo'
console.log(s1.includes('lo'))
//  - Finds the first and last index of 'l'
console.log(s1.indexOf('l'))
console.log(s1.lastIndexOf('l'))

// Task 3: Text Formatting

// - Takes a string '   JavaScript Methods   '
var word='   JavaScript Methods   '
console.log(word)
//  - Removes leading and trailing spaces
var str1=word.trim()
console.log(str1)
//  - Converts the result into uppercase, then lowercase
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
//  - Also print separately trimmed-start and trimmed-end results
console.log(word.trimStart())
console.log(word.trimEnd())


// Task 4: Extract Substrings
// - Takes 'Learning JavaScript is fun!'
var str2='Learning JavaScript is fun!'
//  - Extracts:
//    • 'JavaScript' using slice(9, 19)
console.log(str2.slice(9,19))
//    • 'Learning' using substring(0, 8)
console.log(str2.substring(0,8))

// Task 5: Padding Magic

// - Takes a string '50'
var s3="50"
//  - Pads it:
//    • With '0' at start until length 5
console.log(s3.padStart(5,0))
//    • With '*' at end until length 10
console.log(s3.padEnd(10,"*"))

//Task 6: Replace & Compare

//  - Takes the string 'I love JavaScript, JavaScript is powerful!'
var str3='I love JavaScript, JavaScript is powerful!'
//  - Replaces the first 'JavaScript' with 'JS'
console.log(str3.replace('JavaScript','JS'))
//  - Then replaces all 'JavaScript' occurrences with 'JS'
console.log(str3.replaceAll('JavaScript','JS'))
//  - Compare 'apple' and 'banana' using localeCompare()
var f1="apple"
var f2="banana"
console.log(f1.localeCompare(f2))


// Task 7: Mixed Operations (Mini Project)
//   - Returns an object with the following info:
//    • Length of string
//    • First and last character
//    • Uppercase & lowercase versions
//    • Whether it includes the word 'JS'
//    • A sliced portion (first 5 chars)
//    • Trimmed string

var analyzestring="   JS is awesome!   "
var obj={}
obj.length=analyzestring.length
obj.firstchar=analyzestring.charAt(0)
obj.lastchar=analyzestring.at(-1)
obj.uppercase=analyzestring.toUpperCase()
obj.lowercase=analyzestring.toLowerCase()
obj.includesJs=analyzestring.includes('JS')
obj.sliced=analyzestring.slice(0,5)
obj.trimmed=analyzestring.trim()
console.log(obj)


