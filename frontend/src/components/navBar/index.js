import React from "react";
import styled from "styled-components";
import CountrySelector from "components/countrySelector";

import MenuItems from "./menuItems";

const Bar = styled.div`
  z-index: 2;
  width: 100%;
  padding: 10px;
  display: flex;
  position: fixed;
  background-color: #fff;
  justify-content: space-between;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.03);
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

const Spacer = styled.div`
  height: 90px;
`;

const NavBar = props => {
  return (
    <>
      <Bar>
        <Content>
          <Title>News</Title>
          <Menu>
            <MenuItems {...props} />
          </Menu>
        </Content>
        <CountrySelector onChange={props.countryChangeHandler} />
      </Bar>
      <Spacer />
    </>
  );
};

export default NavBar;
