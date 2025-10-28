// 1. Array Basics
/*
// 1. Create an array of 5 colors and print the second and last color.
var colors=["red","green","blue","white","yellow"]
console.log(colors)
console.log(colors[1])
console.log(colors[4])

/*
/*
//2. Create an array of numbers and replace the first element with 100.
var numbers=[10,20,30,40]
console.log(numbers)
numbers[0]=100
console.log(numbers)


// 3. Create an array with mixed data types (string, number, boolean). Print the type of each element using a loop.

var mixedArray=["sharanya",23,true,3.14,"goodmorning",false]
console.log(mixedArray)
for (let i=0;i<mixedArray.length;i++){
    console.log(mixedArray[i],typeof mixedArray[i])
}

//4. Create a nested array and print the inner array’s second element.
var arr=[1,2,3,[4,5,6]]
console.log(arr[3][1])


//5. Create an array using the Array constructor and display its length.
var arr1=new Array(10,20,30,40,50)
console.log(arr1.length)

*/

// 2. push(), pop(), shift(), unshift()

/*
//6. Create an array of fruits and add one fruit at the end using push().
var fruits=["apple","banana","mango","kiwi"]
fruits.push("pineapple")
console.log(fruits)

// 7. Remove the last element from the array using pop() and display the updated array.
fruits.pop()
console.log(fruits)

// 8. Add two new fruits at the beginning using unshift().
fruits.unshift("orange")
console.log(fruits)

// 9. Remove the first element using shift() and print the new array.
fruits.shift()
console.log(fruits)

// 10. Use a combination of push() and pop() to keep only 3 elements in your array.

fruits.push("grapes")
console.log(fruits)

while(fruits.length>3){
    fruits.pop();
}
console.log(fruits)

*/

// 3. slice() and splice()
/*
//  11. Create an array [10, 20, 30, 40, 50] and use slice() to extract [20, 30].

var array=[10,20,30,40,50]
console.log(array.slice(1,3))

// 12. Using the same array, use splice() to replace 30 with 35
array.splice(2,1,35)
console.log(array)

// 13. Insert 25 before 30 using splice().
array.splice(2,0,25)
console.log(array)

// 14. Remove the last two elements using splice().

array.splice(5,1)
console.log(array)

// 15. Use slice() to copy the first three elements into a new array.

new_array=array.slice(0,3)
console.log(new_array)

*/

// 4. concat(), join(), toString()

/*
// 16. Create two arrays [1,2,3] and [4,5,6] and merge them using concat().
var arr1=[1,2,3]
var arr2=[4,5,6]
console.log(arr1.concat(arr2))

// 17. Convert an array of names into a string separated by commas using join().
var names=["sharanya","harish","lavanya","ramu"]
console.log(names.join(','))

// 18. Use toString() on an array and display the output.
var a=[10,20,30,40]
console.log(a.toString())

// 19. Merge three arrays using concat() and find the length of the new array.
var a1=[10,20]
var a2=[30,40,50]
var a3=[60,70,80,90]
new_arr=a1.concat(a2,a3)
console.log(new_arr)
console.log(new_arr.length)

// 20. Create an array of city names and join them using ' - ' as a separator.
var city=["warangal","hyderabad","bengaluru","delhi"]
console.log(city.join('-'))

*/

// 5. Search Methods (indexOf, lastIndexOf, includes)

/*
//   21. Create an array ['apple', 'banana', 'orange', 'banana', 'grape'] and find the first index of 'banana'.
var fruits=['apple', 'banana', 'orange', 'banana', 'grape']
console.log(fruits.indexOf('banana'))

// 22. Find the last index of 'banana' using lastIndexOf().
console.log(fruits.lastIndexOf('banana'))

// 23. Check if 'mango' exists in the array using includes().
console.log(fruits.includes('mango'))

// 24. Write code to check if a specific number exists in an array, if not, push it.
var num=[10,15,20,25,30,35]
if(!num.includes(40)){
    num.push(40)
    console.log("number was not in the array --added it!")
}
else{
    console.log("number already exists in the array")
}
console.log("updated array:"+num)

//  25. Use includes() to verify if 'kiwi' is present in your fruit array and print a message accordingly.

if(fruits.includes('kiwi')){
    console.log("kiwi is present in the fruits array ")
}
else{
    console.log("kiwi is not present in the fruit array")
}
*/

// 6. find() and findIndex()

/*
// 26. Create an array [5, 12, 8, 130, 44] and find the first number greater than 10.

var arr3=[5,12,8,130,44]
console.log(arr3.find(function(x){return x>10}))

// 27. Use findIndex() to locate the position of the first element greater than 50.
console.log(arr3.findIndex(function(x){return x>50}))

// 28. Find the first even number in an array using find().
console.log(arr3.find(function(x){return x%2==0}))

// 29. Find the index of the first odd number in an array using findIndex().
console.log(arr3.findIndex(function(x){return x%2!=0}))

// 30. Use find() to search for a string longer than 5 characters in an array of words.

var words=["hai","hello","welcome","goodmorning"]
console.log(words.find(function(x){return x.length>5}))
*/

// 7. sort(), reverse(), copyWithin(), flat()
/*

// 31. Sort an array [5,3,8,1,2] in ascending order.
var ar1=[5,3,8,1,2]
console.log(ar1.sort())

// 32. Reverse the sorted array and print it.
console.log(ar1.reverse())

//33. Use copyWithin() to copy first two elements to the end of an array [10,20,30,40,50].
var array1=[10,20,30,40,50]
console.log(array1.copyWithin(3,0,2))

// 34. Flatten a nested array ['a','b',['c','d'],['e',['f']]] using flat().
var nested_array= ['a','b',['c','d'],['e',['f']]]
console.log(nested_array.flat(3))

// 35. Use flat() with depth 2 to flatten ['x',['y',['z',['w']]]]].
var nestedArray=['x',['y',['z',['w']]]]
console.log(nestedArray.flat(2))

*/

// 8. length, Destructuring & Misc

// 36. Create an array of 10 numbers and print its length.
var numbersArray=[10,15,20,25,30,35,40,45,50,55]
console.log(numbersArray.length)

// 37.Remove the last element using pop() and print the new length.
numbersArray.pop()
console.log(numbersArray)
console.log(numbersArray.length)

// 38. Use array destructuring to extract first three elements into variables.
let[a,b,c]=numbersArray
console.log(a)
console.log(b)
console.log(c)

//39. Create a constant array and modify one element (to show arrays are mutable).

const fruits=["apple","banana","grapes"]
fruits[2]="mango"
console.log(fruits)

//40. Combine multiple array methods (push, splice, sort, reverse) to manipulate data dynamically.

var data=[30,10,20,40]
// push
data.push(50,60)
console.log(data)
// splice
data.splice(2,0,25)
console.log(data)
// sort
console.log(data.sort())
// reverse
console.log(data.reverse())
