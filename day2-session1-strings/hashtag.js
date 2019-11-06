const str = 'make in india'
// tagGenerator(str) #MakeInInda


function tagGenerator(str) {
    let output = '#'
    const words = str.split(' ')
    for(let i=0; i< words.length; i++) {
        output = output + words[i].charAt(0).toUpperCase() + words[i].slice(1)
        .toLowerCase()
    }
    return output
}

console.log(tagGenerator(str)) //#MakeInIndia
console.log(tagGenerator('ind vs australia'))