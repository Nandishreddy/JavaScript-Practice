const  city = 'bangalore'

console.log(city.length) //9
console.log(city.toUpperCase)

console.log(city.slice(0,3)) //'ban'
console.log(city.slice(1)) //'angalore'

//to capitalize
console.log(city[0].toUpperCase()+city.slice(1).toLowerCase())

//to check if a char is part of string

console.log(city.indexOf('a')) //1
console.log(city.indexOf('z')) //-1

console.log(city.includes('a')) // true
console.log(city.includes('z')) // false

if(city.indexOf('a')>=0) {
    console.log('a is present')
} else {
    console.log('char is not present')
}


console.log("*".repeat(25))
const numbers = '1234567890'

//phone format = (123) 456-7890
const firstHalf = numbers.slice(0,3)
const secondHalf = numbers.slice(3,6)
const thirdHalf = numbers.slice(6)

console.log(`(${firstHalf}) ${secondHalf}-${thirdHalf}`)

const tags = 'js, ruby, java'
console.log(tags.split(', ')) // ['js', 'ruby'. 'python']

const emails = '1@gmail.com, 2@gmail.com, 3@gmail.com'
console.log(tags.split(', ')) // ['1@gmail.com', '2@gmail.com', '3@gmail.com']


const locations = 'bang - madya - mysore'
console.log(tags.split(', ')) // ['bang', 'manday', 'mysore']
