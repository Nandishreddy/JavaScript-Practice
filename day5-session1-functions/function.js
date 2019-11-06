//function declaration
//keyword, function a name, n1 & n2 are parameters
//parameters are local variables, is availble only inside the functions
//anything inside{} is called body of the fumnctions
function add(n1,n2){
    const result = n1+n2 //as we have used const, this variable 'result' is avialable only within the function
    total = n1+n2 //here total has become a global variable
    //return keyword is used to send back values, if the return keyword is not used, by default js send back undefined
    return result
    //anything after return, will not be executed
    const name='bangalore'
}


//calling a function or invoking a function
//10 & 20 are arguments
console.log(add(10,20))

//if a variable is declared inside a function, it is available inly within the function and not outside
//console.log(result)
console.log(total)