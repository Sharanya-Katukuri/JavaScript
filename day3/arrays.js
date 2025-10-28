// array:store multiple values in a single variable

// declaration of an array

/*
// using array literals:using square brackets[]

// intializing array while declaring
var colors=["red","green","pink"]
console.log(colors)
console.log(typeof(colors))
console.log(colors[1])

// declaring empty array and adding values using index
var arr=[]
arr[0]="sharanya"
arr[1]=23
arr[2]="female"
console.log(arr)
console.log(typeof(arr))
console.log(arr[0])
*/


/*
// using array new keyword

// empty array
var fruits=new Array();
fruits[0]="apple"
fruits[1]="banana"
fruits[2]="mango"
fruits[3]="kiwi"
console.log(fruits)
console.log(typeof(fruits))
console.log(fruits[3])

// declaring and intializing array at the same time

var arr=new Array("sharanya","warangal")
console.log(arr)
console.log(typeof(arr))
console.log(arr[1])

*/


// ARRAY METHODS

var arr=["sharanya",23,"hari",21,"vinnu",19]

// push():add one or more elements at the end of the array

arr.push("shannu")
arr.push(23)
console.log(arr)
arr.push("nani",24)
console.log(arr)

// pop():remove an element at the end of the array
arr.pop()
console.log(arr)
arr.pop()
console.log(arr)

// unshift():add one or more elements at the starting of the array
arr.unshift("nani",24)
console.log(arr)

// shift():remove an element at the starting  of the array
arr.shift()
console.log(arr)
arr.shift()
console.log(arr)

// indexof():returns the index of a specified element or -1 if not found
console.log(arr.indexOf('sharanya'))
console.log(arr.indexOf("vinnu"))
console.log(arr.indexOf("hari"))
console.log(arr.indexOf("nani"))

// length:returns the number of elements in the array
console.log(arr.length)

// slice:retrns a portion of an array as a new array
var subarray=arr.slice(2,4)
console.log(subarray)

// splice:adds/removes/replace elements at a specific index
var num=[10,20,30,40,50]
num.splice(2,1,35)
console.log(num)
num.splice(2,2,35,45)
console.log(num)

// concat():merges two or more arrays

var arr1=[1,2,3]
var arr2=[4,5,6]
var arr3=[7,8,9]
var merged=arr1.concat(arr2)
console.log(merged)
var main_array=arr1.concat(arr2,arr3)
console.log(main_array)

// tostring():converts the array into a comma separated string
str1=main_array.toString()
console.log(str1)
console.log(typeof(str1))

// join():joins array elements into a string with a specifed separator

array4=main_array.join('-')
console.log(array4)
join1=main_array.join("*")
console.log(join1)

// includes():checks if an element exists in the array it gives bool values true or false
console.log(main_array.includes(3))
console.log(main_array.includes(5))
console.log(main_array.includes(10))

// lastindexOf():returns the last occurrence of an element
var array=[1,2,1,3,2,4,1,5,2,6,7,6,4,3]
console.log(array.lastIndexOf(2))
console.log(array.lastIndexOf(3))
console.log(array.lastIndexOf(1))

// sort():return an array in sorted 
var a=[1,3,6,2,4,7,0,8,5]
console.log(a.sort())

// reverse():returns an array in reverse order 
console.log(a.reverse())

// copyWithin():copy the sequence of arry elements with in the same array to a new position

let ar=[10,20,30,40,50]
ar.copyWithin(0,3)
console.log(ar)

// flat()
let arr5=['a','b','c','d','e',['f',['g']]]
let newarr=arr5.flat(2)
console.log(newarr)

// map()

var array2=[2,3,4,5,6]
var double=array2.map(function(x){return x*2})
console.log(double)

// find()
var result=array2.find(function(x){return x>5})
console.log(result)

// findIndex()
var index=array2.findIndex(function(x){return x>5})
console.log(index)