function Person(name,country){
    this.name=name
    this.country= country
    this.greet=function (){
        return 'Hi, my name is' + this.name
    }
    this.details=function(){
        return 'Hi, my name is ' + this.name +' from '+ this.country
    }
    this.sayHi=function(){
        return 'Hi '+name+'said'+this.name
    }
}

//const p1=person()
//console.log(p1) //undefined

const p2 =new Person('rahul', 'INDIA')
console.log(p2)
console.log(p2.name)
console.log(p2.greet())


const p3=new Person('sachin', 'INDIA')
console.log(p3)
console.log(p3.name)
console.log(p3.greet())
console.log(p3.details())


