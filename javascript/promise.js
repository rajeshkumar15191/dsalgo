const api_url = "https://starwars.egghead.training/";
const response_promise = fetch(api_url + "films");
response_promise.catch((err) => {
  console.log("response_promise::", err);
});
