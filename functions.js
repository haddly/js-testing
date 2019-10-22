const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstname: "Brad" };
    user["lastname"] = "Traversy";
    return user;
  },
  fetchUser: () =>
    axios //installed axios with "npm i axios", this is for making api requests
      .get("https://jsonplaceholder.typicode.com/users/1") //fake restapi that contains multiple users for testing requests
      .then(res => res.data) // .then is used as it returns a promise
      .catch(err => "error") // if error occurs, return "error"
};

module.exports = functions;
