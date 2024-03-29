const numbers = [10,20,30,40,50]

//find if an element is preset
console.log(numbers.includes(20))
console.log(numbers.indexOf(25) >= 0)

//find elements based on the condition
//c style of programming
function findNum(numbers, num) {
    let output
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]>num){
            output = numbers[i]
            break
        }
    }
    return output
}

console.log(findNum(numbers, 25)) //30
console.log(findNum(numbers, 55)) //undefined

//js style of programming - functional progarmming
function findNumJS(numbers, num) {
    const output = numbers.find(function(n){
        return n>num
    })
    return output
}
console.log(findNumJS(numbers, 25)) //30
console.log(findNumJS(numbers, 55)) //undefined