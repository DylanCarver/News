import axios from "axios";
import FadeIn from "react-fade-in";
import styled from "styled-components";
import Article from "components/article";
import React, { useState, useEffect } from "react";

const Wrapper = styled.div`
  min-height: 120vh;
`;

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
    <Wrapper>
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
    </Wrapper>
  );
};

export default NewsItems;
