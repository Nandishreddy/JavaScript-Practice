console.log(name)//undefined
console.log(city)//undefined
//console.log(location)
// var get hoisted
var name='sachin'
console.log(name)//sachin

var city='bangalore'

//let and const dont get hoisted
//ReferenceError: playerName is not defined
console.log(playerName)
let playerName ='rahul'
console.log(playerName)