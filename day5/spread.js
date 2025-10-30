// spread  operator
// it is used to spread all the elemnets into individual elements.
// also we can copy the entire array into new array
// syntax:
// ...array_name

// it is represents by 3(dots) "..."

/*
var food=["idli",40,"white",true]
console.log(food)
console.log(...food)
var food1=[...food]
console.log(food1)

var obj={name:"sharanya",age:23}
console.log(obj)
var obj1={obj}
console.log(obj1)
// console.log(...obj) throws an erorr

*/

// destructing:
// 1.array destructing
// assigning new variables to each and every element in the array

/*
var food=["idli",40,"white",true]
// console.log(food[0])
// var foodname=food[0];
// console.log(foodname)
// var food_price=food[1];
// console.log(food_price)

var [foodname,price,color,had]=food;
console.log(foodname)
console.log(had)
console.log(price)

*/

// 2.object destructing
// assigning new varables to each and every element in the objects


var obj={name:"sharanya",age:23,city:"warangal"}
// var obj_name=obj["name"]
// console.log(obj_name)

var {name,age,city}=obj
console.log(name)
console.log(age)
console.log(city)

// in object destructing assigning of varables name and object property keys name should be same

var {name:a,age:b,city:c}=obj
console.log(a)
console.log(b)
console.log(c)


// take two objects
// add some 4 values in each .
// take one more object and in that object ,if i print ,it should print the  values of both the objects

var object1={name:"sharanya",age:23,gender:"female",city:"warangal"}
var object2={color:"pink",food:"biryani",fruit:"blackgrapes",place:"india"}

var main_object={...object1,...object2} //using spread operatot we can merge the two objects
console.log(main_object)

var a={a:1}
var b={b:2}
var c={c:3}
var d={...a,...b,...c}
console.log(d)




