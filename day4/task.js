// 1.Create an object named student with properties:
//  name, age, course, and marks.

var student={name:"sharanya",age:23,course:"python",marks:90}
console.log(student)

// 2.Add a new property grade and modify the marks value.
student.grade="A"
console.log(student)
student.marks=95
console.log(student)

// 3.Use Object.keys() and Object.values() to display all property names and their values separately.

console.log(Object.keys(student))
console.log(Object.values(student))

// 4.Use Object.entries() to print key–value pairs together in array format.
console.log(Object.entries(student))

//5. Create another object extraDetails with properties like city and rollNo,
//  and merge it into the student object using Object.assign().

var details={city:"warangal",rollno:"24001I0034"}

Object.assign(student,details)
console.log(student)

//6. Use Object.hasOwnProperty() to check if the student object has the property course and address.

console.log(student.hasOwnProperty("course"))
console.log(student.hasOwnProperty("address"))

//7. Make a copy of the student object and apply Object.freeze() on it.
//  Try adding or modifying properties and observe that no changes happen.


var students_details={name: 'sharanya',age: 23,course: 'python',marks: 95,grade: 'A',city: 'warangal',rollno: '24001I0034'}
Object.freeze(students_details)
students_details.gender="female"
console.log(students_details)
students_details.name="charanya"
console.log(students_details)
delete students_details.grade
console.log(students_details)

//8. Apply Object.seal() on another copy of the object and verify that:

Object.seal(student)

// You cannot add or delete properties,
student.email="sharu@gemail.com"
console.log(student)
delete student.city
console.log(student)

// But you can modify existing values.
student.name="charanya"
console.log(student)

student.city="hyderabad"
console.log(student)
