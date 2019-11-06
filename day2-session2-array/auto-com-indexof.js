const names = ['veeresh', 'suresh', 'satish']
function findNames(names, search){
    return names.filter(function(name){
        return name.toLowerCase().indexOf(search.toLowerCase())>=0
    })
}

console.log(findNames(names, 'sa'))