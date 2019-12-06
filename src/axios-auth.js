import axios from "axios";

// const token2 = localStorage.getItem("token");
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"

  // uncomment to set token

  //   headers: {
  //     Authorization: 'Token ' + token2,
  //     'Content-Type': 'application/json'
  //   }
});

export default instance;
