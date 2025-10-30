// object
// an object in js is a collection of data in key-value pairs

/*

// creating object

// using object literals
// creating empty array and add the elements
let person={}
person.name="sharanya"
console.log(person)
person.age=23
console.log(person)

let student={id:1234,name:"sharanya",course:"python"}
console.log(student)

// using the object constructor

// creating empty and add the values
let Person=new Object();
Person.name="harish"
Person.age=21
console.log(Person)
Person.city="warangal"
Person.gemail="hari@gmail.com"
console.log(Person)

// Accessing object properties

//using dot notation
console.log(Person.city)
console.log(Person.age)

// using Square Brackets Notation
console.log(student['course'])
console.log(student['name'])
console.log(student['id'])

// adding and modifying properties:
Person.gemail="hari123@gmail.com"
console.log(Person)

student.id=12345
console.log(student)

// deleting properties
delete Person.gemail
console.log(Person)

delete student.course
console.log(student)

// 
let person_1={
    name:"lavanya",
    greet:function(){
        console.log(`Hello,my name is ${this.name}`)
    }
}
person_1.greet()

*/

// methods
const obj={a:1,b:2,c:3,d:4,e:5}

const employee={ename:"sharanya",email:"sharu@gmail.com",loc:"hyderabad"}

// keys():retruns object property name as an array
console.log(Object.keys(obj))
console.log(Object.keys(employee))

// values():returns object values as an array

console.log(Object.values(obj))
console.log(Object.values(employee))

// entries:retruns as an array in the form of [[key,value]]

console.log(Object.entries(obj))
console.log(Object.entries(employee))

// assign():copies the values of all own properties from one or more source object to a target object

const target={a:1,b:2,c:3}
const source={d:4,e:5}
Object.assign(target,source)
console.log(target)

// create():creates a new object with specified prototype object and properties
const obj2=Object.create({foo:"cherry",age:23})
console.log(obj2.age)
console.log(obj2.foo)

// freeze():if freeze an object we can't add,update,delete on that object
Object.freeze(obj)
// updating
obj.c=10;
console.log(obj)
// adding
obj.f=6
console.log(obj)
// deleting
delete obj.c
console.log(obj)

// seal():we can update but we can't add or remove on that object after that seal the object

const obj1={a:1,b:2,c:3,d:4,e:5}
Object.seal(obj1)
// updating
obj1.c=10
console.log(obj1)
// adding
obj1.f=6
console.log(obj1)
// deleting
delete obj1.c
console.log(obj1)

// hasOwnProperty():retrun bool value if the property name matched

const students={name:"hari",age:21,gender:"male"}
console.log(students.hasOwnProperty("name"))
console.log(students.hasOwnProperty("course"))