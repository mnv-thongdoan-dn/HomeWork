// 1. Define a variable
// let and const
const MAX_SIZE = 25 * 1024 * 1024;
let title = 'Hello World';
title = 'Hello ES6'

// 2. String Interpolation
var user = { name: 'David' };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = `Hello ${user.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`
console.log(message);

// 3. Rest Parameter
function foo(x, y, ...args) {
  var a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
};
console.log(foo(1, 2, 'hello', true, 7) === 9)

// 4. Default Parameter Values
function sum(x = 0, y = 7, z = 42) {
  return x + y + z;
};
console.log(sum());

// 5. Arrow Functions
let evens = [1, 2, 3, 4, 5, 6];
let odds  = evens.map((v) => { return v + 1; });
let pairs = evens.map((v) => { return { even: v, odd: v + 1 }; });
let nums  = evens.map((v, i) => { return v + i; });
let fives = [];
nums.forEach((v) => {
  if (v % 5 === 0) {
    fives.push(v);
  }
});
console.log(fives)

// 6. Classes
class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.move(x, y);
  }
}

// var Shape = function(id, x, y) {
//   this.id = id;
//   this.move(x, y);
// };

console.log(Shape)

// Shape.prototype.move = function(x, y) {
//   this.x = x;
//   this.y = y;
// };

console.log(Shape)