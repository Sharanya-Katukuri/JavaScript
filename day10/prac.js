// Write a program using a for loop to print numbers from 1 to 10.
for(var i=1;i<=10;i++){
    console.log(i)
}

// Write a program using a for loop to find the sum of the first 10 natural numbers
let sum=0
for(let j=1;j<=10;j++){
    sum+=j
}
console.log(`sum of the first 10 natural numbers: ${sum}`)

// Write a program using a for loop to print the multiplication table of 5

let table=5
for(let x=1;x<=10;x++){
    console.log(`${table}X${x}=${table*x}`)
}


// Write a program using a for loop to print each character of a string (for example, "Sharanya").
let str="sharanya"
for(let word of str){
    console.log(word)
}

// Write a program using a for loop to find the factorial of a given number (for example, 5 → 120).

let num=5,fact=1
for(let i=1;i<=num;i++){
    fact*=i
}
console.log(`factorial of ${num} is ${fact}`)

// while

// Write a program using a while loop to print numbers from 1 to 10.
var y=1
while(y<=10){
    console.log(y)
    y++
}
// Write a program using a while loop to print all even numbers between 1 and 20.

let a=2
while(a<=20){
    console.log(a)
    a+=2
}


// do..while:

// Write a program using a do...while loop to print numbers from 1 to 10.

let b=1
do{
    console.log(b);
    b++
}
while(b<=10)


// Write a program using a do...while loop to print all odd numbers between 1 and 15.
let c=1
do{
    console.log(c);
    c+=2
}
while(c<=15)

// Write a program using a do...while loop to find the sum of the first 5 natural numbers.

let d=1
var sum1=0
do{
    sum1+=d
    d++
}
while(d<=5);
console.log(sum1)

// Write a program using a do...while loop to print the multiplication table of 6.

let table1=6
let val=1
do{
    console.log(`${table1}X${val}=${table1*val}`)
    val++
}
while(val<=10);