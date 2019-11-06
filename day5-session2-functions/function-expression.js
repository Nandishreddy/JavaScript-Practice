//function declaration gets hoisted
console.log(sayHi())
function sayHi(){
    return 'HI'
}


//function expression
//dont get hoisted
//functions in javascript are treated as first class citizens

//greet()
const greet=function(){
    console.log('hi')
}
greet()