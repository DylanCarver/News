import React from "react";
import styled from "styled-components";
import CountrySelector from "components/countrySelector";

import MenuItems from "./menuItems";

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

const NavBar = props => {
  return (
    <Header>
      <Content>
        <Title>News</Title>
        <Menu>
          <MenuItems {...props} />
        </Menu>
      </Content>
      <CountrySelector onChange={props.countryChangeHandler} />
    </Header>
  );
};

export default NavBar;
