// else if

var marks=85
if(marks>=90 && marks<=100){
    console.log("Grade:A")
}
else if(marks>=85 && marks<90){
    console.log("Grade:B")
}
else if(marks>=60 && marks<85){
    console.log("Grade:C")
}
else if(marks>=35 && marks<60){
    console.log("Grade:D")
}
else{
    console.log("failed")
}

// using function
 function Marks(marks1){
   if(marks1>=90 && marks1<=100){
    console.log("Grade:A")
}
else if(marks1>=85 && marks1<90){
    console.log("Grade:B")
}
else if(marks1>=60 && marks1<85){
    console.log("Grade:C")
}
else if(marks1>=35 && marks1<60){
    console.log("Grade:D")
}
else{
    console.log("failed")
} 
 }
Marks(65)

// using prompt
var Marks2=prompt("enter marks")
if(Marks2>=90 && Marks2<=100){
    console.log("Grade:A")
}
else if(Marks2>=85 && Marks2<90){
    console.log("Grade:B")
}
else if(Marks2>=60 && Marks2<85){
    console.log("Grade:C")
}
else if(Marks2>=35 && Marks2<60){
    console.log("Grade:D")
}
else{
    console.log("failed")
}
    

// switch

var day="monday"
switch(day){
    case "sunday":
        console.log("its an weekend")
        break
    case "monday":
        console.log("its workingday")
        break
    case "tuesday":
        console.log("its non-vegday")
        break
    case "wednesday":
        console.log("its wednesday")
        break
    default:
        console.log("invalid day")

}

// using function

function week(Day){
    switch(Day){
    case "sunday":
        console.log("its an weekend")
        break
    case "monday":
        console.log("its workingday")
        break
    case "tuesday":
        console.log("its non-vegday")
        break
    case "wednesday":
        console.log("its wednesday")
        break
    default:
        console.log("invalid day")

}
}
week("sunday")


// using prompt

let Days=prompt("enter a day")
switch(Days){
    case "sunday":
        console.log("its an weekend")
        break
    case "monday":
        console.log("its workingday")
        break
    case "tuesday":
        console.log("its non-vegday")
        break
    case "wednesday":
        console.log("its wednesday")
        break
    default:
        console.log("invalid day")

}

