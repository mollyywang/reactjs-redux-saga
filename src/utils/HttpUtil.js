import axios from "axios";

const http = axios.create({
  baseURL: 'http://127.0.0.1:5001'
});

http.interceptors.request.use(
  config => {
    let jsonStr = localStorage.getItem("persist:root");
    console.log(jsonStr);
    let user = JSON.parse(JSON.parse(jsonStr)["user"]);
    let token = user.token || "";
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);


export default http;
