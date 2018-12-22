import axios from "axios";
import decodeJSON from "./utilities/decode-json";
import { createConnection, getConnection } from "typeorm";

createConnection();

axios
  .get("http://www3.nhk.or.jp/news/easy/top-list.json")
  .then(function(response: any) {
    const allArticles = decodeJSON(response.data);

    for (let article in allArticles) {
      console.log(getConnection());
    }
  })
  .catch(function(error: any) {
    console.log(error);
  });
