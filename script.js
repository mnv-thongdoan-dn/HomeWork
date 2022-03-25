// 1. Define a variable
// let and const
const MAX_SIZE = 25 * 1024 * 1024;
let title = 'Hello World';
title = 'Hello ES6'

// Let and Const – What's the Difference?
// Khi khai báo một biến bằng let bạn có thể không gắn giá trị nhưng với const thì bạn bắt buộc phải gắn giá trị cho nó,
// bạn có thể gắn lại giá trị khác cho biến khai báo bằng let, còn const không thể gắn lại giá trị khác.

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
class Move {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
class Shape extends Move {
  constructor(id, x, y) {
    super(x, y)
    this.id = id;
  }
}

var ex = new Shape(1, 2, 3)
console.log(ex.x)

// 8. Promise
const promise1 = new Promise(function(myResolve, myReject) {
  setTimeout(function( msg = "", who = "Foo" ) { 
      myResolve(msg + ' Hi ' + who + '!'); 
  }, 100);
});
const promise2 = new Promise(function(myResolve, myReject) {
  setTimeout(function( msg = "", who = "Bar" ) { 
      myResolve(msg + ' Hi ' + who + '!'); 
  }, 200);
});

Promise.all ([ promise1, promise2 ]).then (( data ) => {
  console.log('Finish after 300ms:' + data[0] + data[1]);
})

// 9. Loops
// for of
let arr = [
  {id: 1, name: "thong"},
  {id: 2, name: "thanh"},
  {id: 3, name: "thinh"},
]

for(let i of arr){
  console.log(i)
}

// findIndex

const arrNumber = [
  {id: 1, name: "thong"},
  {id: 2, name: "thanh"},
  {id: 3, name: "thinh"},
  {id: 4, name: "thom"},
]

let indexItem = arrNumber.findIndex((item) => item.id === 4);
console.log(indexItem)