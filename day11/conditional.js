// conditional statements
// used to make decisions in programming

// if Statement:checks true condtion
let age=23
if (age>=18){
    console.log("you are eligible to vote")
}

// if..else statement:if the condition true if block will execute ,if it's false else block will be execute

let Age=17
if (Age>=18){
    console.log("you are eligible to vote")
}
else{
    console.log("you are not eligible to vote")
}

let number=10
if(number%2==0){
    console.log(`${number} is even number`)
}
else{
    console.log(`${number} is an odd number`)
}

// else if :checks multiple conditional sequentially

let marks=85
if(marks>=90 && marks<=100){
    console.log("Grade:A")
}
else if (marks>=85 && marks<90){
    console.log("Grade:B")
}
else if (marks>=60 && marks<85){
    console.log("Grade:C")
}
else if(marks>=35 && marks<60){
    console.log("Grade:D")
}
else{
    console.log("Failed")
}

// Switch

var day=4
switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    default:
        console.log("invalid day")
}

// break:exits the loop completely
for (let i=0;i<=10;i++){
    if(i==5){
        break
    }
    console.log(i)
}

// continue:skips current iteration,moves to next

for (let i=0;i<=10;i++){
    if(i==5){
        continue
    }
    console.log(i)
}
