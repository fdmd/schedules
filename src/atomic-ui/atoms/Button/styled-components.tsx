import styled from "styled-components";

const Container = styled.button`
  width: 100px;
  background-color: white;
  font-weight: 600;
  border-radius: 4px;
  border-style: solid;
  transition: background-color 200ms, color 200ms;
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
