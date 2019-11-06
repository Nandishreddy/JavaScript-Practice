

//Javascript treats fucntions as first class citizens - allow us to assign fucntins to variable
//fucntion expression
const greet = function(n) {
    console.log(n)
}


//higher order fucntions - sayHello
// if a function takes another function as an argument OR if a function returns another function then that is called as HOF
function sayHello(greet, name) {
    setTimeout(()=>{
        greet(name)
    },2000);
}

sayHello(greet, 'ani')

sayHello(function(n) {
    console.log('inline function', n)
}, 'dct')