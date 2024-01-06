let name = {
  firstname: "rajesh",
  lastname: "kumar",
  printName: function (state, city) {
    console.log(
      this.firstname + "--" + this.lastname + "--" + state + "--" + city
    ); // 'this'  belongs to calling methods
  },
};
name.printName(); // op rajesh--kumar
let printName2 = function (state, city) {
  console.log(
    this.firstname + "--" + this.lastname + "--" + state + "--" + city
  ); // 'this'  belongs to calling methods
};
//*****call methods is used for function borowwing and setting the context
let name2 = {
  firstname: "Amrita",
  lastname: "Nandy",
};
name.printName.call(name2); //op amrita nandy

// we can pass additional argument as well comma seprated
name.printName.call(name2, "bihar", "patna"); //op Amrita--Nandy--bihar--patna

//***** the only difference between call and apply method is the way we pass the argument
name.printName.apply(name2, ["bihar", "patna"]); // Amrita--Nandy--bihar--patna

//****Bind method it similar to call method it returns a function to be invoked later and  */
let myName = printName2.bind(name2, "bihar", "patna");
myName();
