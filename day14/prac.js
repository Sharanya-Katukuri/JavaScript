var date=new Date()
console.log(date)
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toTimeString())
console.log(date.toLocaleString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

// GET METHODS

console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())


// SET METHODS

date.setFullYear(2028)
console.log(date.toString())
date.setMonth(1)
console.log(date.toString())
date.setDate(12)
console.log(date.toString())
date.setHours(9)
console.log(date.toString())
date.setMinutes(35)
console.log(date.toString())
date.setSeconds(56)
console.log(date.toString())
date.setMilliseconds(788)
console.log(date)



