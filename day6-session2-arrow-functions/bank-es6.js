function Customer(data){
    this.accNo=data.accNo
    this.name=data.name
    this.balance=data.balance
    this.getDetails=()=> `${this.accNo} ${this.balance}`

    this.transaction=(amount, code)=>{
        if(code){
            return this.balance += amount
        } else {
            if(amount>this.balance){
                return 'insufficient funds'
            } else {
               return this.balance -=amount
            }
        }
    }
}

const c1= new Customer({accNo:'SBI123',name: 'arjun', balance: 1500})
console.log(c1.getDetails())
console.log(c1.transaction(1000, 1))
console.log(c1.transaction(1000, 0))
console.log(c1.transaction(1000, 0))