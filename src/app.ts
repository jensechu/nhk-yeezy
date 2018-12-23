import axios from "axios";
import decodeJSON from "./utilities/decode-json";
import { createConnection, getConnection, getRepository } from "typeorm";

createConnection();

axios
  .get("http://www3.nhk.or.jp/news/easy/top-list.json")
  .then(function(response: any) {
    const allArticles = decodeJSON(response.data);

    allArticles.forEach((article: any) => {
      getConnection()
        .getRepository("Article")
        .findOne({ news_id: `${article.news_id}` })
        .then((hasArticle: any) => {
          if (!hasArticle)
            getConnection()
              .createQueryBuilder()
              .insert()
              .into("Article")
              .values(article)
              .execute();
        });
    });
  })
  .catch(function(error: any) {
    console.log(error);
  });
