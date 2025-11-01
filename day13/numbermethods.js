// NUMBER METHODS


// toFixed()
let num=123452.678
console.log(num.toFixed(2))
console.log(num.toFixed(1))
console.log(num.toFixed(0))
console.log(num.toFixed(5))


// parseInt():converting string into an integer ignoring non numeric characters

console.log(parseInt("123abc"))
console.log(Number.parseInt("sharanya1234"))
console.log(parseInt("    456     "))
console.log(parseInt("3.3456"))
console.log(parseInt("4.9678abce565"))

// parseFloar():converting string into a float ponit,preserving decimals

console.log(parseFloat("1234.45anvs"))
console.log(parseFloat("sha1234.0976"))
console.log(parseFloat("12965.986"))

// toprecicison():

var num1=2356.65
console.log(num1.toPrecision(5))
var num2=76540.877
console.log(num2.toPrecision(7))
console.log(num2.toPrecision(9))
console.log(num2.toPrecision(12))
console.log(num2.toPrecision(1))

// Number.isInteger():

console.log(Number.isInteger("123"))
console.log(Number.isInteger(123))
console.log(Number.isInteger(123.3))
console.log(Number.isInteger(123.564))
console.log(Number.isInteger("123abc"))
console.log(Number.isInteger(123.0))


// Number.isNaN:checks if a value is Not-a-Number

console.log(isNaN("sert"))
console.log(Number.isNaN(123))
console.log(isNaN("hello"))
var sum="s"+4
console.log(isNaN(sum))

//Number.isFinite():
console.log(Number.isFinite("123"))
console.log(Number.isFinite(123))
console.log(Number.isFinite("123.345"))

console.log(isFinite("123"))
console.log(isFinite("123.345"))








