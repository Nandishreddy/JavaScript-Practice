function Hashtag(str){
    this.str
    const words = tag1.split(' ')
    this.generateTag=function(){
    let output = '#'
    for(let i=0; i< words.length; i++) {
        output = output + words[i].charAt(0).toUpperCase() + words[i].slice(1)
        .toLowerCase()
    }
    return output
}
}

const tag1 = new Hashtag('hello world')
console.log(tag1.generateTag())