import styled from "styled-components";
import { Color } from '../../Constants/Constant'

export const StyledButton = styled.button`
  background: ${Color.primary};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 50%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Public Sans', sans-serif;
  
  margin: ${props => props.marginSize || 0}rem 0 1rem 0;
`;
