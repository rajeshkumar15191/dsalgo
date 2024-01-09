let name = {
  firstname: "rajesh",
  lastname: "kumar",
};

let printName = function (state, district) {
  console.log(
    this.firstname + "--" + this.lastname + "--" + state + "--" + district
  );
};

// Bind Polyfills
Function.prototype.myBind = function (...args) {
  var callback = this,
    ctx = args.splice(1);
  return function (...a) {
    callback.call(args[0], ...[...ctx, ...a]);
  };
};

// const result2 = printName.myBind(name, "Palia");
// result2("India");

//polyfill for arr.foreach
const arr = [1, 2, 3, 4, 5];
const logger = (item, index) => {
  console.log(item, index);
};
Array.prototype.forEach = function (callback) {
  let context = this;
  console.log("context", context);
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
};
arr.forEach(logger);
