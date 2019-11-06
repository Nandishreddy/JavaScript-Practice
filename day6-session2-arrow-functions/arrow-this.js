const function1 = function(){   //es5 functions
    console.log(this) //refers global 
}
function1

console.log(this) //{}

const function2 = () => { //es6 arrow function
    console.log(this) //{} //refers to empty obj
}
function2

const person={
    name: 'rakesh',
    skills: ['js','rb','py'],
details:function(){
    this.skillsL.forEach(skill=>{       //inside the arrow fucntions this referss to the value of this in the outer scope
        console.log(`${this.name} knows ${skill}`)
    })
    //this.skills.forEach(skill=>console.log(`${this.name} knows ${skill}`))
}
}
person.details()

/* const person = {
    name: 'rakesh',
    skills : ['js','rb','py'],
    details: () => {    //not recommended
        console.log(this) //{}
    }
}
person.details() */

