const items = [
    {id:1, name: 'chicken', isVeg: false},
    {id: 2, name: 'gobi', isVeg: true},
    {id: 3, name: 'motton', isVeg: false}
]

function findVeg(items){
    return items.filter(function(item){
        return item.isVeg
    })
}

console.log(findVeg(items))