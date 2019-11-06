function FilterNum(a){
    this.a=a
    output = []
    this.getEvens=function(){
        for(let i=0;i<a.length;i++){
            if(a[i]%2===0){
                return output.push(a[i])
            }
        }
    }
}

const Filter = new FilterNum([10,15,20,25,30])
console.log(Filter.getEvens())