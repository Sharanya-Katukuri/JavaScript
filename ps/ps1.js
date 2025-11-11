// Q1. Find the first non-repeated character
var word="banana"
for (i=0;i<=word.length;i++){
    count=0
    for (j=0;j<=word.length;j++){
        if (word[i]==word[j]){
            count+=1
        }
    }
    if(count==1){
        console.log(word[i])
        break

    }

}

var str="racecar"
let result=null
    for(let char of str){
        if(str.indexOf(char)==str.lastIndexOf(char)){
            result= char;
            break;
        }

    }
console.log(result)



// Q2. Convert temperature series from Celsius to Fahrenheit
celsius=23
fahrenheit=(celsius*9/5)+32
console.log(fahrenheit)

// Q3. Reverse words in a sentence (preserve spacing)

function reverseWord(sentence){
    return sentence
    .split(" ")
    .map(word=>word.split("").reverse().join(""))
    .join(" ")
}
console.log(reverseWord("hello world"))
console.log(reverseWord("good morning!!"))



// Q4. Sum digits until single digit

function digitalRoot(num){
    while(num>9){
        let sum=0;
        let digits=num.toString().split("");
        for (let d of digits ){
            sum+=parseInt(d);
        }
        num=sum;
    }
    return num
}
console.log(digitalRoot(49))
console.log(digitalRoot(1235655))



// Q5. Check if object is empty
function isEmptyObject(obj){
    if(Object.keys(obj).length===0){
        return true
    }
    else{
        return false
    }
        
}
console.log(isEmptyObject({}))
console.log(isEmptyObject({ename:"sharanya",age:23}))

function isEmpty(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            return false;
        }
    }
    return true;
}
console.log(isEmpty({}))
console.log(isEmpty({ename:"sharanya",age:23}))

// Q6. Generate Range of Numbers

function range(start,end,step=1){
    let numbers=[];
    for(let i=start;i<=end;i+=step){
       numbers.push(i);

    }
return numbers;
}
console.log(range(2,12))

// Q7. Count Character Occurrences in a String

function charCount(str){
    let count={};
    for(let char of str){
        if(count[char]){
            count[char]+=1
        }
        else{
            count[char]=1;

        }
    }
    return count;
}
console.log(charCount("hello"))


// Q8. Generate first N Fibonacci numbers
function Fibonacci(n){
    let a=0,b=1
    console.log(a)
    console.log(b)
    for(let i=2;i<n;i++){
        let c=a+b;
        console.log(c)
        a=b;
        b=c;
    }
      
}
Fibonacci(5)

function fib(n){
    let fib=[0,1];
    for(let i=2;i<n;i++){
        fib.push(fib[i-1]+fib[i-2])
    }
    return fib;
}
console.log(fib(5))



// Q10. Swap two variables without a temp (using destructuring)
var a=1
var b=12
a=a+b
b=a-b
a=a-b

console.log(a)
console.log(b)

let c=5;
let d=8;
[c,d]=[d,c];
console.log(c);
console.log(d);



// Q11. Count vowels in string
function countVowels(str){
     count=0
    for(i of str){
       
        if (i=="A"||i=="E"||i=="I"||i=="O"||i=="U"||i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
            count+=1
        }
    }
console.log(count)
}
countVowels("sharanya")
countVowels("APPLE")


const countvowels=(str)=>{
    let vowels="aeiouAEIOU";
    let count=0;
    for(let ch of str){
        if(vowels.includes(ch)){
            count++;
            +
        }
    }
    console.log(count);
};
countvowels("harish")
countvowels("LAVANYA")


// Q12. Sum of two smallest positive numbers

function sumTwoSmallestPositives(arr) {
  let first = Infinity;   // store smallest positive
  let second = Infinity;  // store second smallest positive

  for (let num of arr) {
    if (num > 0) {
      if (num < first) {
        second = first;
        first = num;
      } else if (num < second) {
        second = num;
      }
    }
  }

  // Check if we found two positive numbers
  if (second === Infinity) {
    return null;
  }

  return first + second;
}

// Test cases
console.log(sumTwoSmallestPositives([5, 1, -2, 3, 1])); // 2 (1 + 1)
console.log(sumTwoSmallestPositives([4, 7, 2, 9, 6]));  // 6 (2 + 4)
console.log(sumTwoSmallestPositives([-3, -2, 0]));      // null
