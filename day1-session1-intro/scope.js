// var is fuction scoped
//var is available across the function
var user={
    name:'admin',
    isAdmin: true
}

//block of code
if(user.isAdmin){
    var token ='secret123'
}
//is availble outside block
console.log(token)

//let & const is block scoped
const customer = {
    name: 'c1',
    isCustomer: ture
}

if(customer.isCustomer) {
    const cToken = 'abc123'
    console.log(cToken)
}

//not available outside block
//RefereceError: CToken is not defined
//console.log(cToken)

for(i=0; i<5; i++) {
    console.log(i)
}
console.log('outside', i)

for(j=0; j<5; j++)
{
    console.log(j)
}
console.log('outside', j)
