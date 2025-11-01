// first method
var date1=new Date()
console.log(date1)
console.log(date1.toString())
console.log(date1.toLocaleDateString())
console.log(date1.toLocaleTimeString())

// get methods
console.log(date1.getFullYear())
console.log(date1.getMonth())
console.log(date1.getDate())
console.log(date1.getDay())
console.log(date1.getHours())
console.log(date1.getMinutes())
console.log(date1.getSeconds())
console.log(date1.getMilliseconds())


// second method
var date2=new Date(2026,2,1,9,15,34,233)
console.log(date2.toString())
console.log(date2.toLocaleDateString())
console.log(date2.toLocaleTimeString())

// getmethods
console.log(date2.getFullYear())
console.log(date2.getMonth())
console.log(date2.getDate())
console.log(date2.getDay())
console.log(date2.getHours())
console.log(date2.getMinutes())
console.log(date2.getSeconds())
console.log(date2.getMilliseconds())


console.log(date2.toLocaleString())
console.log(date2.toTimeString())
console.log(date2.toDateString())


// setmethods
console.log(date1.toString())
date1.setFullYear(2030)
console.log(date1.toString())
date1.setMonth(1)
console.log(date1.toString())
date1.setDate(14)
console.log(date1.toString())
date1.setHours(5)
console.log(date1.toString())
date1.setMinutes(35)
console.log(date1.toString())
date1.setSeconds(56)
console.log(date1.toString())
date1.setMilliseconds(987)
console.log(date1)



console.log(date2.toString())
date2.setFullYear(2029)
console.log(date2.toString())
date2.setMonth(7)
console.log(date2.toString())
date2.setDate(12)
console.log(date2.toString())
date2.setHours(12)
console.log(date2.toString())
date2.setMinutes(45)
console.log(date2.toString())
date2.setSeconds(34)
console.log(date2.toString())
date2.setMilliseconds(543)
console.log(date2)


// 
var date3=new Date()
console.log(date3.toString())
// console.log(date3.getTime())
date3.setTime(5)
console.log(date3.toString())

