import React from "react";
import styled from "styled-components";

const Item = styled.a`
  cursor: pointer;
  margin-left: 15px;
  color: ${props => (props.active ? "blue" : "black")};
`;

const MenuItems = props => {
  return (
    <>
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
    </>
  );
};

export default MenuItems;
