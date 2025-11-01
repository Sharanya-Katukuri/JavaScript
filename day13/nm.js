// Convert the string "25" into a number using the Number() method.
console.log(Number("25"))

// What is the output of the following code?

console.log(Number("10abc"));

// Use parseInt() to extract the integer from the string "45.89".
console.log(parseInt("45.89"))

// Use parseFloat() to convert "56.78px" into a floating-point number.
console.log(parseFloat("56.78px"))

// Round 9.876 to 2 decimal places using the toFixed() method.
let num=9.876
console.log(num.toFixed(2))

// Convert the number 255 to its hexadecimal string using toString(16).
let num1=255
console.log(num1.toString(16))

// Check if "Hello" is a valid number using isNaN().
console.log(isNaN("hello"))

// Use isFinite() to check if Infinity is a finite number.
console.log(isFinite(Infinity))

// Check if 15.0 is an integer using Number.isInteger().
console.log(Number.isInteger(15.0))

// Display the number 123.4567 with only 4 significant digits using toPrecision().
var num2=123.4567
console.log(num2.toPrecision(4))

// Write a program to check if user input is a number or not using isNaN().
/*
var number=prompt("enter a number:")
if(isNaN(number)){
    console.log("Not a valid number");
}
else{
    console.log("valid number")
}
*/

// Convert the boolean value true to a number and display the result.
console.log(Number(true))

// Convert the string "007" to a number without losing leading zeros — what will happen?
var n1="007"
console.log(n1)

// Write a program that takes a decimal number and shows it rounded to 3 decimal places using toFixed().
var n2=123.097643
console.log(n2.toFixed(3))

// Create a program that converts the hexadecimal string "0xF" to a decimal number.
console.log(Number("0xF"))

// Check if the following values are finite using isFinite():
// NaN, 100, -Infinity.
console.log(isFinite(NaN))
console.log(isFinite(100))
console.log(isFinite(-Infinity))

// Convert the string "123.456text" using both parseFloat() and Number() — observe the difference.
console.log(parseFloat("123.456text"))
console.log(Number("123.456text"))

// Convert the number 255 to binary, octal, and hexadecimal formats using toString().
var n3=255
console.log(n3.toString(2))
console.log(n3.toString(8))
console.log(n3.toString(16))

// Create a program to validate if an entered value is an integer or not using Number.isInteger().
/*
var n4=Number(prompt("enter a number:"))
if(Number.isInteger(n4)){
    console.log("valid integer")
}
else{
    console.log("not valid integer")
}
*/
// Use Number.isNaN() to check if the result of 0 / 0 is a valid number.
console.log(Number.isNaN(0/0))

// Write a function that takes a string input and returns a valid number, or "Invalid" if it’s not convertible to a number.
function fun(a){
    if(isNaN(a)){
        console.log("invalid number")
    }
    else{
        console.log("valid number")
    }
}
fun("123")
fun("sharanya")
fun("0")

// Given a floating-point number, return it as a string with exactly two digits after the decimal point using toFixed().
/*
var n5=Number(prompt("enter a number:"))
console.log(n5.toFixed(2))
*/

// Write a program that takes an input number and displays:

/*
var n6=Number(prompt("enter a number:"))
// The number rounded to 2 decimals
console.log(n6.toFixed(2))


// The number in exponential form
console.log(n6.toExponential())

// The number’s binary equivalent
console.log(n6.toString(2))
*/

// Create a function that checks whether a value is both finite and an integer.

function fun_num(a){
    if(isFinite(a) && Number.isInteger(a)){
        console.log("it is finite and an integer")
    }
    else{
        console.log("it is not a finite and integer")
    }
}
fun_num(2345)
fun_num(Infinity)
fun_num("sharanya")

// Convert a string containing both numbers and characters like "85kg" into a number and print the result.
var str="85kg"
console.log(parseInt(str))