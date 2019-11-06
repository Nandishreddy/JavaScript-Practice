const n1=10, n2=9.8, n3 = 15.2

console.log(typeof n1) // 'number'
console.log(typeof n2) // 'number'


console.log(typeof typeof n1) // 'string'

console.log(Math.round(n2)) //10
console.log(Math.ceil(n2)) //10
console.log(Math.ceil(n3)) //16


console.log(n2) // 9.8

console.log(Math.min(55,45,35,1)) //10
console.log(Math.min([55,45,35,1])) //NaN
console.log(Math.min(...[55,45,35,1])) //1
//NaN not a number
//typeof Nan- number


