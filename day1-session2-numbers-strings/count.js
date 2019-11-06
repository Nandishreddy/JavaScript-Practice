function countLetter(string, char) {
    let count = 0
    for(let i=0; i<string.length; i++) {
        if(string[i] === char) {
            count ++
        }
    }
     return count
}

console.log(countLetter('hellow', 'l')) //2