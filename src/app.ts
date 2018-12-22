import axios from "axios";
import decodeJSON from "./decode-json";

axios
  .get("http://www3.nhk.or.jp/news/easy/top-list.json")
  .then(function(response: any) {
    const allArticles = decodeJSON(response.data);
  })
  .catch(function(error: any) {
    console.log(error);
  });
