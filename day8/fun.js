// function add(){
//     var a=9
//     var b=10
//     var c=a*b
//     console.log(c)
//     var d=a+b
//     return d
// }
// console.log(add())

// function sub(a,b){
//      console.log(a-b)
//      var d=a*b
//      return d
// }
// console.log(sub(20,10))

// area using parameterized function
// function area(length,breadth){
//     console.log(length*breadth)
// }
// area(10,3)

// arrow function
var a=()=>{
    console.log("sujana")
}
a()
// parameterized arrow function
var sub=(a,b)=>{
    console.log(a+b)
}
sub(10,11)
// returned arrow function
var v=()=>{
    var a=10
    var b=20
    var c=a+b
    console.log(c)
    var d=a*b
    return d
}
console.log(v()) 
// parameterized return function
function sub(a,b){
     console.log(a+b)
     var d=a-b
     return d
}
console.log(sub(20,10))
// parameterized returned arrow function
a=(a,b)=>{
     console.log(a+b)
     var d=a-b
     return d
}
console.log(a(20,10))