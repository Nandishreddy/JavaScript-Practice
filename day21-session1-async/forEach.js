function myForEach(numbers, func) {
    for(let i =0; i< numbers.length; i++){
        func(numbers[i])
    }
}

myForEach([10,20,30], function(n){
    console.log(n)
})

const fruits = ['apple', 'mango', 'chikoo']

Array.prototype.myForEach = function(func){
    for(let i = 0; i<this.length; i++){
        func(this[i])
    }
}

fruits.myForEach(function(ele){
    console.log(ele)
})

const users = [
    {id:1, name: 'sam'},
    {id:2, name: 'donna'}
]

users.myForEach(function(ele){
    console.log(ele.id, ele.name)
})


//return value at the first index
Array.prototype.first = function() {
    return this[0]
}

//return value at the last index
// friuts.last() 
Array.prototype.last = function() {
    return this[this.length-1]
}


console.log(fruits.first())
console.log(fruits.last())


