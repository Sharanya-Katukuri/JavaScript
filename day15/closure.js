// function outerFunction(){
//     let outerVariable="Outer variable"
//     function innerFunction(){
//         console.log(outerVariable)
//     }
//     return innerFunction
// }
// // console.log(outerFunction())
// let myFunction=outerFunction()
// myFunction()

function counter(){
    let count=0
    function increment(){
        count++
        console.log(count)
    }
    function decrement(){
        count--
        console.log(count)
    }
    return{
        increment:increment,
        decrement:decrement,
    }
}
let myCounter=counter()
console.log(myCounter)
myCounter.increment()
myCounter.increment()
myCounter.decrement()