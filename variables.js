// 1) let,const, var => difference
// 2) Hoisting
// 3) Operator Precendence

// var 

// ES5 => var
// ES6 => Ecmascript 6 / ES2015 =>>> // major updates // let const 
// ES7 => ES2016
// ES8 => ES2017


// var 

// Hoisting => variable
console.log(x); // OUTPUT => undefined

x = 10;

var x;

// Hoisting => functions
console.log(a); // OUTPUT => undefined

a = function () {
  console.log("Hello");
}

var a; // declaring variable 

// let 

let b = "Manoj"; // Not supported hoisting

// Reassinging the value;
b = 10;

b = 2345.6788

console.log(b);


// const 
// Constanst value => cannot reassign the value
const c = 10;

// c = 20; => can't do this

// Difference in const , let, var

// Scoping in javascript
/*
  1) Global scope => globally defined top of file
  2) Function scope => declared inside the function
  3) Block scope => declared inside if-else block , switch statement, 
  {
    // Block 
  } 
*/


// Global scope
let xy = 10; // globally defined


// Function scope
function abc() {
  let ab = 12; // function scoped
  var cd = 34; // function scoped
  console.log(xy, "1");

}

abc();

// console.log(ab, cd, "function scope");

{
  let ab = 12; // block scoped
  var cd = 34; // function scoped
  console.log(xy, "2");
}

// console.log(ab, "block scope");
console.log(cd, "block scope");

// Differences
// const block scope,function scope,global scope
// let block scope,function scope,global scope
// var function scope,global scope

// Object
const obj = {
  name: "manoj",
  age: 25,
  a: () => {
    console.log("hello");
  }
}

// Optional Chaining
// obj.email // undefined.mail
console.log(obj.email?.mail);

// Javascript support these two
// higher order functions
// first class functions
// arrow function
() => {

}

// normal
function abc() {

}



let f = () => {
  console.log("F function")
}

let t = (f) => {
  console.log(f());
  return () => {
    return () => {
      console.log("second return function");
    }
  }
}

console.log(t(f)()()); // currying


// this operator

