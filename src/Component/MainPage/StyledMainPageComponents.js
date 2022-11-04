import styled from "styled-components";
import { Color } from '../../Constants/Constant'
export const StyledTabItemContainer = styled.div`
display: flex;
flex-direction: column;
width: 80%;
justify-content: flex-start;
margin-top: 2rem;
flex:1;
`;
export const StyledPageContainer = styled.div`
display: flex;
height: 100vh;
width: 100vw;
align-items: stretch;
`;



export const StyledLeftTab = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${Color.gray300}};
  justify-content: flex-start;
  align-items: center;
  border-right: 1px solid ${Color.gray100};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;

export const StyledRightContent = styled.div`
display: flex;
flex: 5;
background-color: white;
justify-content: center;
align-items: center;
`;

export const StyledLogoContainer = styled.div`
width: 90%;
display: flex;
align-items: center;
margin-top: 20px;
justify-content: flex-start;
`;

export const StyledNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 10px;
    justify-content: space-between;
`

export const StyledDescription = styled.p`
    font-family: 'Public Sans', sans-serif;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    margin:2px;

`
export const StyledLogoName = styled.h1`
    font-size: 1.2rem;
    font-family: "Sora", sans-serif;
    line-height: 1rem;
    align-self: start;
    margin:2px;
`;
export const StyledUserName = styled.h1`
    font-size: 1rem;
    font-family: "Sora", sans-serif;
    line-height: 1rem;
    align-self: start;
    margin:2px;
`;

export const StyledUserContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`
export const StyledSettingContainer = styled.div`
    display: flex;
    align-items: left;
    margin-left: 10px;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
    align-self: flex-start;
    width: 85%;
    position: relative;
    height: 50px;
`

export const StyledSettingLists = styled.div`
    position: absolute;
    bottom: 115px;
    right: 10px;
    width: 60%;
    height: 10%;
    
`
export const StyledSettingItem = styled.div`
    font-family: 'Public Sans', sans-serif;
    border-radius: 10px;

    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    margin:2px;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid ${Color.gray100};
    cursor: pointer;
    &:hover{
        background-color: ${Color.gray100};
    }
`
export const StyledSettingBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
background-color: ${Color.gray100};
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
z-index: 1;
border-radius: 10px;
background-color: white;
`
