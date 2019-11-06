function apiCall1() {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const r = Math.round(Math.random() * 100)
            resolve(r)
        }, 1000)
    })
}

function apiCall2() {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const r = Math.round(Math.random() * 100)
            resolve(r)
        }, 500)
    })
}

// apiCall1()
//     .then((value) => {
//         console.log('api call1:', value )
//     })

 
// apiCall2()
// .then((value) => {
//     console.log('api call2:', value )
// })   

Promise.all([apiCall1(), apiCall2()])
    .then(function(values){
        const [apiResult1, apiResult2] = values
        console.log('api result 1', apiResult1)
        console.log('api result 2', apiResult2)

    })
    .catch(function(err){
        console.log(err)
    })