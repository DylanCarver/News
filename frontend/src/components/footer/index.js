import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 200px;
  user-select: none;
  margin-top: -100px;
  padding-top: 100px;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee5f;

  p {
    opacity: 0.3;
  }
`;

const Footer = () => {
  const date = new Date();
  return (
    <Wrapper>
      <p>{date.getFullYear()}</p>
    </Wrapper>
  );
};

export default Footer;
