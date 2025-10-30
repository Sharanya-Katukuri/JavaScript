// hoisting
// is an behaviour of calling the varables,functions before declaration

// variable hoisting
// is an behaviour of calling the varables before declaring

// console.log("I ate biryani")

/*
console.log(food)
var food="Mushroom Biryani"
console.log(food)

let name;
console.log(name) //TDZ
name="sharanya"
console.log(name)
*/

// Temporal Dead Zone(TDZ):even let and const hoisted but it will move to TDZ
// it will be there in that zone,untill it see the value assigned to that variable


// console.log(city)
// const city="warangal"

// es6 features topics

// function hoisting:
// is an behaviour of calling the function before decalaring
/*
add(10,20)
function add(a,b){
    console.log(a+b)
}

meetup();
var meetup=()=>{
    console.log("sunda went to  meet sundri in rain ")
}
*/
// function expression is not hoisting

/*what do you mean by hoisting
why let and const cant be hoisting
what is function hoisting
*/


// forin ()

// it is used with objects,to iterate objects
// 


var person={name:"sharanya",age:23,place:"warangal"}

for(var per in person){
    console.log(`${per}:${person[per]}`)
}
for(var per of person){
    console.log(per)
    console.log(`${per}:${person[per]}`)

}


// forOf()
// it is  deals with arrays,it iterate the arrays

// arrays


var colors=["blue","white","red","green","yellow","black"]
for(var color of colors){
    console.log(`The colors are ${color}`)
}
for(var col in color){
        console.log(`The colors are ${col}`)

}
