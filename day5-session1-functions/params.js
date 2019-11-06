function sum(n1,n2){
    console.log(arguments)
    console.log(n1,n2)
    return n1+n2
}
console.log(sum())
console.log(sum(10))
console.log(sum(10,20))
console.log(sum(10,20,30))

//if additional params are passed, extra one's are ignored
// if less params are passed, the value will be undefined



function total(){
    return arguments['0']+arguments['1']
}

console.log(total(10,20))