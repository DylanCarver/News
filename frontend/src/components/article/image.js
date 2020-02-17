import styled from "styled-components";

const Image = styled.div`
  background: url("${props => props.src}");
  width:200px;
  flex-shrink:0;
  background-size: cover;
  background-position:center;
  margin: -15px 0 -15px -15px;
`;

export default Image;
