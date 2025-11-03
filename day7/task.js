// Greeting Function
function greetUser(name,times){
    if(times<1){
        console.log(`warning,'time' must be atleast 1`)
    }
    for(let i=0;i<times;i++){
        console.log(`Hello,${name}`)
    }
}
greetUser("sharanya",5)
greetUser("sharanya",0)

// Rectangle Area & Perimeter Function

function calcRectangle(width,height){
    if(width<0 || height<0){
        return{error:"invalid values :width and height must be poistive numbers."}
    }
    var area=width*height
    var perimeter=2*(width+height)
    return{
        area:area,
        perimeter:perimeter
    }
    
}
console.log(calcRectangle(3,4))
console.log(calcRectangle(-1,0))



// Flexible String Repeater Function

function repeatString(str,count,separator=""){
    if (count<=0){
        return"count must be greater than zero";
    }
    return Array(count).fill(str).join(separator)

}
console.log(repeatString("ha",3,"-"))
console.log(repeatString("ha",3))
console.log(repeatString("hi",0))

//Parameterized Filter Function

function filterByLength(wordList,minLen,maxLen){
    if(minLen>maxLen){
        [minLen,maxLen]=[maxLen,minLen];
    }
    return wordList.filter(word => word.length >=minLen && word.length <=maxLen);

}
const words = ["apple", "kiwi", "banana", "grape", "pear", "mango"];
console.log(filterByLength(words, 5, 6));  
console.log(filterByLength(words, 8, 3));


//Parameterized Calculator Function

function calculate(a,b,operation){
    switch (operation){
        case "add":
            return a+b;
        case "subtract":
            return a-b;
        case "multiply":
            return a*b;
        case "divide":
            if(b==0) return "error:division by zero"
            return a/b;
        default:
            return"invalid operation"
    }
}
console.log(calculate(10,5,"add"))
console.log(calculate(10,5,"subtract"))
console.log(calculate(10,5,"multiply"))
console.log(calculate(10,0,"divide"))
console.log(calculate(10,2,"divide"))
console.log(calculate(10,5,"power"))