// if the random number is even we will call success function, else we will call failure function

//success
const success = (even) => {
    console.log('success', even)
}

//failure
function failure(odd){
    console.log('failure', odd)
}

// higher order fucntion
function generalRandom(success, failure) {
    setTimeout(() => {
        const random = Math.round(Math.random()* 100)
        if(random % 2 ==0){
            success(random)
        } else {
            failure(random)
        }
    }, 1000)
}

//pattern 1
//genearateRandom(success, failure)

// pattern 2
generalRandom(function(even) {
    console.log('success inline', even)
}, function(odd) {
    console.log('failure inline', odd)
})