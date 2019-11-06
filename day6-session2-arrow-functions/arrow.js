//function declaration

//function expression
//const total = function(n1,n2){
 //   return n1,n2
//}


const total=function(n1,n2) {
    return  n1 + n2
}

console.log(total(10,20))


//arrow function
const total = (n1,n2) => {
    return n1+n2
}

//const total = (n1,n2) => n1+n2

const numbers = [10,20,30,40,50]
const result = numbers.filter(function(n){ //es5 function
    return n>25
})
console.log(result)


const result1= numbers.filter((n)=>{
    return n > 25
})
console.log(result1)

// 1 - if only 1 argument is passed () is optional
//const result1 = numbers.filter(n=>{
//    return n>25
//})
//console.log(result1)

//2 - if there is only 1 statement to be executed inside the arrow fucntion, {} and return key word is optional
const result1 =numbers.filter(n=>n>25)
console.log(result1)