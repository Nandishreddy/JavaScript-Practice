/*
Write a  function to Uncapitalize the first letter of each word of a string

*/

const str = 'Js String Exercises'
function unCap(str){
    let output=''
    const words = str.split(' ')
    for(let i=0; i<words.length; i++) {
        output = output + words[i].charAt(0).toLowerCase()+words[i].slice(1).toLowerCase()+ ' '
    }    
    return output
}

console.log(unCap(str))
