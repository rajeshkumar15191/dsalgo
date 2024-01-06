//****  undefined output because x local to function will be hoisted and same scope would eb used
// var x = 20;
// (function () {
//   console.log(x);
//   var x = 20;
// })();

//**** missing initializer syntax error
// const y;
// y=20;

// function hoistExample() {
//   var a;
//   console.log("Before: ", a); // undefined since
//   a = 10;
//   console.log("After: ", a); //10
// }

// function hoistingExample() {
//   console.log("Value of a in local scope: ", a); //1 Accessing after initialization
// }
// console.log("Value of a in global scope: ", a); // undefined
// var a = 1;
// hoistingExample(); //

function hoistingExample() {
  a = 1;
}
hoistingExample();
console.log(a);
