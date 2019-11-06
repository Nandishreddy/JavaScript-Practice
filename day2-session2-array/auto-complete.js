const names = ['veeresh', 'suresh', 'satish']
function findNames(names, search){
    return names.filter(function(name){
        return name.toLowerCase().includes(search.toLowerCase())
    })
}

console.log(findNames(names, 'RE'))