//  Scope:
//  Accessibility of a variable
//  types:

// Global Scope:variable accessed throughout program

let name="sharanya"
console.log(name)
function greet(){
    console.log("hello "+name)
    if(true){
        console.log("How are you",name)
    }
}
greet()
console.log(name)

// local/Function scope:variable access with in the function itself

function demo(){
    let x=10
    console.log(x)
    if(x==10){
        console.log(x)
    }
}
demo()
// console.log(x)  ---throws an error because outside the function not accessed


// Block Scope:access with in the block only

function sample(){
    // console.log(b)  --- throws error
    if(true){
        let a=35
        const b=40
        console.log(a,b)
    }
    // console.log(a) --- throws error
}

// console.log(a,b)----throws an error
sample()


// Lexical Scope():
function outer(){
    let outer="im outside"
    function inner(){
        console.log(outer)
    }
    inner()
}
outer()


