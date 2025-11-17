/*// 5.anonymous function:-->the function without a name is known as anonymous function

var name=function(){
    console.log("Believe you can and you're halfway there")
}
name()

// note--> the process of assigning a variable to the function is known as function expression

// 6.callback function:-->the function which is passed as an argument is known as callback function

function print(){
    console.log("print number")
}
function sum(a,b){
    console.log(a+b)
}
function fun(f){
    console.log(f)
}
fun(print(),sum(10,10))

// example2 

function sayhello(){
    console.log("hello")
}
function execute(fn){
    fn()
}
execute(sayhello)

// 7.higher order function:-->the function which is taking another function as argument is called higher order function.

function welcome(){
    console.log("welcome")
}
function higherorder(callback){
    callback()
}
higherorder(welcome)
// ex2
function greet(name){
    console.log("hello,"+name+"!")
}
function higherorder(callback){
    callback("sujana")
}
higherorder(greet)

//8.IIFE:-->immediately invoked function expression
// syntax:()()
(()=>{
    console.log("The best is yet to come.")
})
()

//1. anonymous funstion
var a=function(){
    var a="sujana"
    var b="yata"
    var c=a+b
    console.log(c)

}
a()

//2. parameterized anonymous function
var employee=function(e_id,e_salary,e_name){
    console.log(e_id)
    console.log(e_salary)
    console.log(e_name)
}
employee(123,"7lpa","sujana")

//3. returned anonymous fun
var sum=function(){
    var a=5
    var b=6
    console.log(a+b)
    var b=a-b
    return b
}
console.log(sum())

//4. anonymous arrow function
var name=(()=>{
   console.log("supraja")
})
name()

//5. parameterized arrow anonymous function

var a=(a,b)=>{
   console.log(a+b)
}
a("sujana","yata")
*/


function sum(a,b){
    console.log(a+b)
}
sum("sujana","yata")