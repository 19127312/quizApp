import { useState } from 'react'
import styled from "styled-components";
import { Icon } from 'react-icons-kit'
import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { Color } from '../Constant';

export function StyledInputContainer({ label, ...props }) {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    }
    else {
      setIcon(eyeOff);
      setType('password');
    }
  }
  const passwordInput = <StyledInputRowContainer>
    <StyledInput type={type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
    <StyledInputPasswordIcon onClick={handleToggle} >
      <Icon icon={icon} size={20} />
    </StyledInputPasswordIcon>
  </StyledInputRowContainer>

  const input = <>
    <StyledLabel>{label}</StyledLabel>
    {props.type === 'password' ? passwordInput : <StyledInput {...props} />}
  </>
  return <StyledInputBox>
    {props.error ?
      <StyledErrorBox>
        {input}
      </StyledErrorBox>
      :
      <>
        {input}
      </>}
    {props.error ? <StyledError>{props.error}</StyledError> : <></>}
  </StyledInputBox>
}

export function InputRadio({ label, ...props }) {
  return <span>
    <StyledInputRadio type="radio" {...props} />
    <StyledRadioItem>{label}</StyledRadioItem>

  </span>


}
const StyledError = styled.p`
  color: ${Color.error100};
  background-color: ${Color.error300};
  padding-left: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-radius: 0.25rem;
  font-family: 'Public Sans', sans-serif;
  font-size: 0.80rem;
`

const StyledErrorBox = styled.div`
  border-style: solid;
  border-width: 2px;
  border-color: red;
  display: flex;
  flex-direction: column;\
  border-radius: 0.25rem;
`
const StyledInputRadio = styled.input`
  type: radio;
  cursor: pointer;
  
`

const StyledInput = styled.input`
  background: rgba(243,244,246,1);
  border-radius: 6px;
  
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  
  border-width: 0px;
  outline: none;
  font-size: 1rem;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  color: rgba(155,155,155,255);

  &:focus {
    color: rgba(188,193,202,1);
  }
  &::placeholder {
    color: rgba(155,155,155,255);
    font-weight: 10;
    font-size: 1rem;
  }
  &:hover {
    color: rgba(188,193,202,1);
    background: rgba(243,244,246,1);
  }
`;
const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0.5rem 0;
  background: rgba(243,244,246,255);
  border-radius: 6px;
  
`

const StyledLabel = styled.label`
  font-size: 1rem;
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-style: bold;
  margin: 0 0 0.1rem 0;
  padding-left: 1rem;
  padding-top: 0.5rem;
`
const StyledRadioItem = styled.label`
  font-family: 'Public Sans', sans-serif;
  font-weight: 200;
  font-style: thin;
  font-size: 1rem;
  margin: 0 1rem 0 0.5rem;
`
export const StyledInputRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const StyledInputPasswordIcon = styled.span`
  padding: 0.5rem;
  cursor: pointer;
`