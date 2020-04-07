import axios from "axios";
import { TokenExpiredError } from "jsonwebtoken";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"]
  }
};

export default setAuthToken;