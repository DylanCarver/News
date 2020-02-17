import React from "react";
import Card from "components/card";
import styled from "styled-components";

import Image from "./image";
import Content from "./content";

const Title = styled.h3`
  margin-bottom: ${props => (props.marginBottom ? "15px" : 0)};
`;

const Article = props => {
  const { url, image, title, description } = props;
  return (
    <Card target="_blank" href={url}>
      {image && <Image src={image} />}
      <Content margin={image}>
        <Title className="title" marginBottom={description}>
          {title}
        </Title>
        {description && <p style={{ opacity: ".5" }}>{description}</p>}
      </Content>
    </Card>
  );
};

export default Article;
