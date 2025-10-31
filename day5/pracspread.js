// spread operators: represents bt 3 dots(...)
// it is used to spread all the elemnets into individual elements.
// also we can copy the entire array into new array

// uses of spread operator
// 1.copying array
let arr=[1,2,3]
console.log(...arr)
let newarr=[...arr]
console.log(newarr)

//2.merging arrays
let arr1=[1,2]
let arr2=[3,4]
let merged =[...arr1,...arr2]
console.log(merged)

//3. passing elements as function arguments

function add(a,b,c){
    return a+b+c;
}
let nums=[1,2,3]
console.log(add(...nums))

// 4.COPYIG AND MERGING OBJECTS
let obj1={a:1,b:2}
let obj2={c:3}
let newobj={...obj1,...obj2}
console.log(newobj)
// console.log(...obj1)   throws error

// 5. Converting Strings to Arrays

let str="hello";
let chars=[...str]
console.log(chars)

// destructing:
// extract values from arrays or objects ad assign them to individual variables

// array destructing

// basic destructing
var fruits=["apple","banana","orange","grapes"]
var [f1,f2,f3,f4]=fruits
console.log(f1)
console.log(f2)
console.log(f3)
console.log(f4)

// skipping elements
const[x1,,x3,]=fruits
console.log(x1)
console.log(x3)

// default values
const[a=100,b=200,c=300]=[10,20]
console.log(a,b,c)

// nested array destructing

const nestedArr=[1,[2,3],4];
const [one,[two,three],four]=nestedArr
console.log(one)
console.log(two)
console.log(three)
console.log(four)

// object destructing

// Basic destructuring
const person={name:"sharanya",age:23,city:"warangal"}
const{name,age}=person
console.log(name)
console.log(age)

// renameing variable name
const {city:place}=person
console.log(place)

// default values
const {country="India"}=person
console.log(country)

// nested destructing
var names={fruit:"apple",info:{flower:"rose",color:"blue"}}

var {info:{flower}}=names
console.log(flower)


// array destructing with spread operator

const colors=["red","blue","pink","yellow","orange"]
const [primary,secondary,...othercolors]=colors
console.log(primary)
console.log(secondary)
console.log(othercolors)

// object destructing with spread

const student={id:123,name:"sharanya",age:23,course:"python"}
const {id,...details}=student
console.log(id)
console.log(details)