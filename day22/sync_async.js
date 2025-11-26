// synchronous

// console.log("step 1 done")
// console.log("step 2 done")
// console.log("step 3 done")


// asynchronous

// console.log("step 1 done")
// setTimeout(()=>{
//     console.log("step 2 done")
// },2000)
// console.log("step 3 done")


// callback
// function Homework(subject,callback){
//     console.log("The subjet "+subject+" home work compelted")
//     callback()
// }
// function finished(){
//     setTimeout(()=>{
//         console.log("home work finished")
//     },2000)
// }
// Homework("Maths",finished)

// callback hell

// setTimeout(()=>{
//     console.log("step 1 done")
//     setTimeout(()=>{
//         console.log("step 2 done")
//         setTimeout(()=>{
//             console.log("step 3 done")
//             setTimeout(()=>{
//                 console.log("step 4 done")
//                 setTimeout(()=>{
//                     console.log("step 5 done")
//                 },200)
//             },2000)
//         },2000)
//     },2000)
// },2000)


function BoilWater(callback) {
    setTimeout(() => {
        console.log("boiling water")
        callback()
    }, 2000)
}
function AddNoodles(callback) {
    setTimeout(() => {
        console.log("Adding noodles")
        callback()
    }, 2000)
}
function AddMasala(callback) {
    setTimeout(() => {
        console.log("Adding masala")
        callback()
    }, 2000)
}
function serve() {
    setTimeout(() => {
        console.log("maggie served to everyone")
    },2000)
}
BoilWater(() => { 
    AddNoodles(() => { 
        AddMasala(() => {
            serve() 
        })
    })
})