import axios from "axios";
import store from "@/store";

let baseURL = "http://travel.test";
// let baseURL = "";

export default () => {
  if (store.getters["Auth/accessToken"] != "")
    return axios.create({
      baseURL: `${baseURL}/api/v1/`,
      headers: {
        Authorization: store.getters["Auth/accessToken"],
      },
    });
  else
    return axios.create({
      baseURL: `${baseURL}/api/v1/`,
      timeout: 1000,
    });
};
