// const promise = new Promise((resolve, reject) => {
//   //   resolve(1);
// });
// console.log("promise::", promise);

const github_api = "https://api.github.com/users/rajeshkumar15191";
const users = fetch(github_api);
console.log("users", JSON.stringify(users));

//interview https://levelup.gitconnected.com/vimp-javascript-promise-implementation-challenges-5a4f120d8606
