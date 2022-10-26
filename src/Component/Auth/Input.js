import styled from "styled-components";

export const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border-style: solid;
  border-color: rgba(155,155,155,255);
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  &:focus {
    display: inline-block;
    backdrop-filter: blur(12rem);
    border-radius: 1rem;
  }
  &::placeholder {
    color: rgba(155,155,155,255);
    font-weight: 10;
    font-size: 1rem;
  }
`;
