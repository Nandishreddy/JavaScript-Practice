class Customer{
    constructor(data){
        this.accNo=data.accNo
    this.name=data.name
    this.balance=data.balance
    }
    getDetais(){
        return `${this.accNo} ${this.balance}`
    }

    transaction(amount,code){
        if(code){
             this.balance += amount
        } else {
            if(amount>this.balance){
                return 'insufficient funds'
            } else {
                this.balance -=amount
            }
        }
        return `${this.accNo} ${this.balance}`
    }
}
const c1= new Customer({accNo:'SBI123',name: 'arjun', balance: 1500})
console.log(c1.getDetails())
console.log(c1.transaction(1000, 1))
console.log(c1.transaction(1000, 0))
console.log(c1.transaction(1000, 0))