

const str='resource'
function chop(str, div) {
    let output=''
    const char = str.split("")
    for(let i=0; i<char.length; i++){
        output = output+char[i].slice('')
    }
    return output
}
console.log(chop(str, 2))