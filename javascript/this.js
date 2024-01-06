"use strict";
//global space points to global object
console.log(this);

/** function scope points to global object because of substituion but in strict mode its undefined but attaching with global call points to global */
// function x() {
//   console.log("*function this\n*", this);
// }
// x();
// window.x(); // points to window object even in strict since window scope is attached so it dependens on how functon is called

/**this inside arrow function */
// arrow function does not have it own this it borrows from lexical enviornment
let printName = {
  name: "rajesh ",
  print: function () {
    console.log("print this", this);
  },
};
printName.print();
