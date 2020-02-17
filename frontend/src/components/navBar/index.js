import React from "react";
import styled from "styled-components";
import CountrySelector from "components/countrySelector";

const Header = styled.div`
  display: flex;
  margin: 10px 10px;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
`;

const Menu = styled.div`
  display: flex;
  margin-top: 5px;
  margin-left: 15px;
`;

const Item = styled.a`
  cursor: pointer;
  margin-left: 15px;
  color: ${props => (props.active ? "blue" : "black")};
`;

const NavBar = props => {
  return (
    <Header>
      <Content>
        <Title>News</Title>
        <Menu>
          <Item
            data-name=""
            onClick={props.categoryChangeHandler}
            active={props.category === ""}
          >
            All
          </Item>
          <Item
            data-name="technology"
            onClick={props.categoryChangeHandler}
            active={props.category === "technology"}
          >
            Technology
          </Item>
          <Item
            data-name="business"
            onClick={props.categoryChangeHandler}
            active={props.category === "business"}
          >
            Business
          </Item>
        </Menu>
      </Content>
      <CountrySelector onChange={props.countryChangeHandler} />
    </Header>
  );
};

export default NavBar;
