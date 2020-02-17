import axios from "axios";
import Article from "components/article";
import React, { useState, useEffect } from "react";

import FadeIn from "react-fade-in";

const NewsItems = props => {
  const [news, setNews] = useState([]);

  function fetchNews() {
    setNews("");
    axios({
      url: `/news?country=${props.country}&category=${props.category}`,
      method: "GET"
    })
      .then(res => {
        setNews(res.data[0].news.articles);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchNews();
  }, [props.country, props.category]);

  return (
    <>
      {news && (
        <FadeIn>
          {news.map(article => {
            const { url, title, urlToImage, description } = article;
            return (
              <Article
                url={url}
                key={url}
                title={title}
                image={urlToImage}
                description={description}
              />
            );
          })}
        </FadeIn>
      )}
    </>
  );
};

export default NewsItems;
