// strings

// strings are sequence of characters used to represent text

// strings are collection of characters enclosed within  
// single codes(''),double codes(""),backticks(``).

// ex: 'sharanya',"sharanya",`sharanya`


// STRING METHIDS
// charAt():to dispaly /obtain the character at particular index,we cant negative indexs are not allowed
// stringname.charAt(indexvalue)
var place="warangal"
console.log(place.charAt(3))
console.log(place.charAt(2))

// charCodeAt():it provides the ASCII value of the character
// by passing index value

var city="WARANGAL"
console.log(city.charCodeAt(1))
console.log(city.charCodeAt(2))
console.log(place.charCodeAt(1))

// at():at the specified index position ,what is the value present
// by passing negative index value also,we can obtain the characters
console.log(place.charAt(3))
console.log(place.at(3))
console.log(place.charAt(-3))
console.log(place.at(-3))

//  concat():combining two strings
// string_name.concat(string2)
var first_name="katukuri"
var last_name="sharanya"
console.log(first_name.concat(" " ,last_name))
console.log(first_name.concat(" "+last_name))

// inclueds():to check whether the character included or not 
// the result will be display in the form of boolean
// string_name.includes("character")
console.log(place.includes("w"))
console.log(place.includes('s'))

// indexOf():to check the index of character
// string_name.indexOf('character')
console.log(place.indexOf('g'))

// lastIndexOf(): to the check last index of the characater
console.log(place.indexOf('a'))
console.log(place.lastIndexOf('a'))

// length:to check the length of the string
console.log(place.length)

// toUpperCase():to convert into uppercase
// string_name.toUppercase()
console.log(place.toUpperCase())

// toLowerCase():to display it in lower case
console.log(city.toLowerCase())

// trim():it is used to trim/remove the space(leading(starting),trailing(ending))
// string_name.trim()
var boy="   harish   "
console.log(boy)
console.log(boy.trim())

// trimStart():it is used to remove the leading space
console.log(boy.trimStart())

// trimEnd():it is used to remove the trailingspace
console.log(boy.trimEnd())

// slice:to get the small portion of the string
// string_name(startindex,endingIndex)endingIndex will excluded(n-1)
var sen="hello world"
console.log(sen.slice(6,11))

// subString(): it is similar to slice(),but now it's deprecated.
console.log(sen.substring(6,11))

// toString():to covert  anything into string
var num=123
console.log(typeof(num))
console.log(typeof(num.toString()))

// padStart():to add the string at the starting until it reaches target length
var number="1"
var course="python"
console.log(number.padStart(6,"4"))
console.log(course.padStart(10,"core"))

// padEnd():ti add the string at the ending until it reaches target length
console.log(number.padEnd(6,"5"))
console.log(course.padEnd(9,"dev"))

// replace():
console.log(place.replace("a","o"))

// replaceAll():
console.log(place.replaceAll("a","o"))
// localcompare():
var name="sharanya"
var name1="lavanya"
console.log(place.localeCompare(city))
console.log(name.localeCompare(name1))

// strtswith():it is used to check whether the given string starts with the letter i pass 
// and the secult will in the form of bool values true or false
var c1="java script"
console.log(c1.startsWith('j'))
console.log(c1.startsWith("java"))
console.log(c1.startsWith("script"))

// endswith():to check whether the string ends with the given letter/character
console.log(c1.endsWith("java"))
console.log(c1.endsWith("t"))
console.log(c1.endsWith("script"))

// split():to split the given strings alog with the separator
var num3="1,2,3,4,5,6"
console.log(num3.split())


// repeat():it is used to repeat the given string as per the number of times,we gave
var place1="hyderabad"
console.log(place1.repeat(3))
