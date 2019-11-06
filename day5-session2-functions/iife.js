//iife - immediately invoked function expression

(function(){
    console.log('hi there am a iife')
})()

//(function(){})()

function someFunction(){
    var n=10
    if(true){
        //var n=20
        (function(){
            var n=20
            console.log(n)
        })
    }
    console.log(n)
}
someFunction()