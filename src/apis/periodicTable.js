import axios from "axios";

export default axios.create({
  baseURL: "https://periodic-table-api.herokuapp.com/",
});
