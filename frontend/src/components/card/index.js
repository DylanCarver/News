import styled from "styled-components";

const Card = styled.a`
  color: #333;
  display: flex;
  padding: 15px;
  overflow: hidden;
  transition: 0.3s;
  border-radius: 5px;
  background-color: #fff;
  text-decoration: none;
  margin: 0 10px 15px 10px;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.1);

  :hover {
    transform: translateY(-2px);
    box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export default Card;
