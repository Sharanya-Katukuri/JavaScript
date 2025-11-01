// NUMERIC METHODS

// Number():converts a value to a number

console.log(Number("10"))
console.log(Number(true))
console.log(Number(false))
console.log(Number("sha"))

// parseInt():converts a string to an integer
console.log(parseInt("20.55"))
console.log(parseInt("sga"))

// parseFloat():converts a string to a floating point number
console.log(parseFloat("209.45"))
console.log(parseFloat("sha"))

// toFixed(n):rounds the number to n decimal places and returs a string
var num=234.561798
console.log(num.toFixed(2))
console.log(typeof(num.toFixed(2)))

// toPrecision(n):formats a number to a specified length
console.log(num.toPrecision(6))
console.log(num.toPrecision(3))

// toString():converts a number to a string
var num1=78
var num2=7890.876
console.log(num1.toString())
console.log(num2.toString())

// isNaN():checks whether a value is Not-a-Number
console.log(isNaN("hello"))
console.log(isNaN(123))
var num4="j"/9
console.log(isNaN(num4))

// isFinate():checks whether a value is a finite number
console.log(isFinite(10))
console.log(isFinite("10"))
console.log(isFinite(Infinity))

// Number.isInteger():checks if the value is an integer
console.log(Number.isInteger(10))
console.log(Number.isInteger(10.5))