import axios from "axios";

const instans = axios.create({
  baseURL: "https://react-main-92a3a-default-rtdb.firebaseio.com/",
});

export default instans;
