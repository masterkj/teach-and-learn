import axios from "axios";
import store from "@/store/index.js";

export default () => {
  if (store.getters["Auth/accessToken"] != "")
    return axios.create({
      baseURL: "http://travel.test/api/v1/",
      headers: {
        Authorization: store.getters["Auth/accessToken"],
      },
    });
  else
    return axios.create({
      baseURL: "http://travel.test/api/v1/",
      timeout: 1000,
      headers: { "X-Custom-Header": "foobar" },
    });
};
