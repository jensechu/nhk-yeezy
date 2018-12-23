import axios from "axios";
import decodeJSON from "./utilities/decode-json";
import { insertNewArticles } from "./article-controller";
import { createConnection } from "typeorm";

const URL = "http://www3.nhk.or.jp/news/easy/top-list.json";

createConnection();

axios
  .get(URL)
  .then(function(response: any) {
    insertNewArticles(decodeJSON(response.data));
  })
  .catch(function(error: any) {
    console.log(error);
  });
