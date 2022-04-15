import styled from "styled-components";

const Container = styled.button`
  width: 100px;
  background: white;
  font-weight: 600;
  border-radius: 4px;
  border-style: solid;
  :hover {
    background-color: gray;
    color: white;
  }
  :active {
    background-color: black;
    color: white;
  }
  cursor: pointer;
`;

export { Container };
