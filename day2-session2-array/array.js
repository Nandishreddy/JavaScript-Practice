//array is an ordered, interger indexed, collection of values
//const fruits =[] or new array()
const players = ['dhoni', 'sachin', 'virat']

console.log(players) //['dhoni', 'sachin', 'virat']

console.log(players[0]) //'dhoni'
console.log(players[0]) // 'virat'
console.log(players[0]) // undefined


console.log(typeof players0) //'object'
console.log(Array.isArray(players)) //'true'

const student = {
    firstName: 'arjun'
}

console.log(typeof student) // 'object'
console.log(Array.isArray(student)) //'false'

// to add elements to an array
// add in the end

console.log(players.push('rahul')) //4
console.log(players) //['dhoni', 'sachin', 'virat', 'rahul']

//beginning of the array
console.log(players.unshift('shewag'))
console.log(players)

//elements at specific indexes
players.splice(1, 0, 'suresh')
console.log(players) //['dhoni', 'suresh', sachin', 'virat', 'rahul']

const fruits = []
fruits.push('apple', 'mango', 'chioo','banana','water melon')

//to remove elements from array
//from end
console.log(players.pop())
console.log(players)//['dhoni', 'suresh', sachin', 'virat']

//from beginning
console.log(players.shift()) //'shewag'
console.log(players)

players.splice(1, 1)
console.log(players) //['dhoni', 'suresh', sachin', 'virat', 'rahul']

//update elements
players[0]='saurav'
console.log(players)

//find length of array
console.log(players.length)

players[players.length] = 'ajay'
console.log(players)

fruits.reverse()
console.log(fruits)

fruits.sort()
console.log(fruits)

console.log(fruits.sort().reverse())

console.log(players.indexOf('virat'))//1
console.log(players.indexOf('zaheer'))//-1
console.log(players)

const tags = ['js', 'string', 'exercise']
console.log(tags.join(' ')) // 'js string exercise'

