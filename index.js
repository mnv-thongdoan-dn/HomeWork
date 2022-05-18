/* Give an example for each of the following methods in Javascript */

// map method:
var arrNumber = [1, 2, 3, 4];

var newArrNumber = arrNumber.map(function(x){
    return x * x;
})

console.log(newArrNumber);

// filter method:
var ages = [3, 6, 7, 12, 15]

var filterNumber = ages.filter(function(age){
    return age > 7;
})

console.log(filterNumber);

// reduce method:
var prices = [100, 200, 220, 3300];

var totalPrice = prices.reduce(function(total, price){
    return total += price;
})

console.log(totalPrice);

// find method:
var listItem = [
    {name: "item1", id: 1},
    {name: "item2", id: 2},
    {name: "item3", id: 3}
]

var findItem = listItem.find(function(item){
    return item.id === 2;
})

console.log(findItem)

// some method:
var listNumber = [23, 12, 11, 26, 99]

var checkList = listNumber.some(function(number){
    return number > 10;
})

console.log(checkList)

// Give an example for add a new element to an array[] (at the end)
// push method:
var arrNumber2 = [2, 3, 4, 5];

var addNumber = arrNumber2.push(6);

console.log(addNumber)
console.log(arrNumber2)

// Give an example for add a new element to an array[] (at the beginning)
// unshift method
var fruits = ['apple', 'kiwi', 'banana']

var addFruits = fruits.unshift('orange', 'coconut')

console.log(fruits)
console.log(addFruits)

// Give an example for removing an element in array[]
// slice method:
var arrNumber3 = [1, 2, 3, 4, 5];

var deleteNumber = arrNumber3.slice(1, 3);
console.log(deleteNumber)

// splice method:
var arrWords = ['a' , 'b', 'c', 'd', 'e'];

var deleteWords = arrWords.splice(2, 2);
console.log(deleteWords)

// pop method: 
var listAnimals = ['horse', 'cat', 'dog', 'pig', 'snake'];

var deleteAnimal = listAnimals.pop();
console.log(deleteAnimal)


// playground
// 1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

var a = 5;
var b = 5;
var sum;

if(a === b){
     sum = (a + b) * 3;
} else {
     sum = a + b
}

console.log(sum)  // => 30

// 2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
var number = 22;

var result;

if (number > 19) {
	result = (number - 19) * 3;
} else {
	result = 19 - number;
}

console.log(result)

// 3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.
var divisible3 = function (param) {
	var result = [];
    var replaceParam;

    for (var i = 0; i < 10; i++) {
        replaceParam = param.replace("*", i);
        if (parseInt(replaceParam) % 3 == 0) {
            result.push(param.replace("*", i))
        }
    }
	console.log("result", result);
}

divisible3('1234567890*')

// 4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.
var divisible6 = function (param) {
	var result = [];
    var replaceParam;

    for (var i = 0; i < 10; i++) {
        replaceParam = param.replace("*", i);
        if (parseInt(replaceParam) % 6 == 0) {
            result.push(param.replace("*", i))
        }
    }
	console.log("result", result);
}

divisible6('1234567890*')