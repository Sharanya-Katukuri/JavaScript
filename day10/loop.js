// loops:repeating a block of code multiple time

// for loop:loop executes a block of code a specific number of times,
// defined by intialization,condition,and increment/decrement

for (let i=0;i<5;i++){
    console.log(i);
}

const students=["sharanya","harish","ramu","lavanya"]
for(let i=0;i<students.length;i++){
    console.log(`Student ${i+1}:${students[i]}`)
}

// while loop:executes a block of code as log as the condition is true

let i=0;
while(i<5){
    console.log(i);
    i++;
}

let student=["sharanya","hari","chandu"]
let j=0;
while(j<student.length){
    console.log(`Student ${j+1}:${student[j]}`)
    j++;
}

// do...while:Executes the block of code once, then checks the condition to continue or stop.
let x=0;
do{
    console.log(x)
    x++;
}while(x<5)

let stds=["sharu","cherry","hari","siri"]
let y=0;
do{
    console.log(`Student ${y+1}:${stds[y]}`)
    y++
}while(y<stds.length)