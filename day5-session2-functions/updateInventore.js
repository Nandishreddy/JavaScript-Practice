/* You will be given an array which lists the current inventory of stock in your store. Example:

var currentInventory = [ {name: "HTC", stock: 25},{name: "Nokia", stock: 1000}, {name: "Samsung", stock: 50},{name: "Sony", stock: 10}, {name: "Apple", stock: 15}];

You will also be given an array which lists the new inventory being delivered to your store today. Example:

var newInventory = [ {name: "LG", stock: 5}, {name: "Sony", stock: 10}, {name: "Samsung", stock: 5}, {name: "Apple", stock: 15}];

Your task is to write a function that when invoked

updateInventory(currentInventory, newInventory);

returns the updated list of your current inventory :

[{name: "HTC", stock: 25}, {name: "Nokia", stock: 1000}, {name: "Samsung", stock: 55}, {name: "Sony", stock: 20}, {name: "Apple", stock: 30},{name: "LG", stock: 5}] */

function updateInventory(currentInventory, newInventory){

    var index;
    var getProduct = function (name) {
        for (var i = 0; i < this.length; i++) {
            if (this[i][1] === name) {
                return i;
            }
        }
        return undefined;
    }
    for (var i = 0; i < newInventory.length; i++) {
        index = getProduct.call(currentInventory, newInventory[i][1]);
        if (index === undefined) {
            currentInventory.push(newInventory[i]);
        } else {
            currentInventory[index][0] += newInventory[i][0];
        }

    }



    currentInventory.sort(function (a, b) {
        if (a[1] > b[1]) {
            return 1;
        }
        if (a[1] < b[1]) {
            return -1;
        }
        return 0;
    });

    return currentInventory;
}
var currentInventory = [ {name: "HTC", stock: 25},{name: "Nokia", stock: 1000}, {name: "Samsung", stock: 50},{name: "Sony", stock: 10}, {name: "Apple", stock: 15}];

var newInventory = [ {name: "LG", stock: 5}, {name: "Sony", stock: 10}, {name: "Samsung", stock: 5}, {name: "Apple", stock: 15}];

console.log(updateInventory(currentInventory, newInventory))