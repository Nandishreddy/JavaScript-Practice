function chopStr(str, count) {
    const output = []
    for(let i =0; i< str.length; i= i+count) {
        output.push(str.slice(i, i+count))
    }
    return output
}

console.log(chopStr('resource', 2))