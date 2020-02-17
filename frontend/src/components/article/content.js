import styled from "styled-components";

const Content = styled.div`
  margin-left: ${props => (props.margin ? "15px" : 0)};

  h3 {
    margin-top: 0;
  }
  p {
    margin-bottom: 0;
  }
`;

export default Content;
