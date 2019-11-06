//all primitive data types are pass by value
let city='bangalore'
console.log(city)
function changeCity(){
    city='mysore'
    console.log(city)
    return city
}
console.log(changeCity())
console.log(city)


//all object types are pass by reference
let location = {
    name : 'jayanagar'
}
const fruits = ['mango']
function changeLocation(location,fruits){
    location.name = 'basavanagudi'
    fruits[0] = 'apple'
    console.log(location)
    return location
}
console.log(changeLocation(location,fruits))