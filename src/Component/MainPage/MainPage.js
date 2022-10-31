import React, { useState } from "react";
import styled from "styled-components";
import { Color } from "../../Constants/Constant";
import logo from "../../Assets/logo.png";
import emptyFolder from "../../Assets/emptyFolder.png";
import TabItem from "./TabItem";
import groupIcon from "../../Assets/groupIcon.svg";
export default function MainPage() {
    const [tab, setTab] = useState(0);
    const handleClickTab = (index) => {
        setTab(index);
    };
    return (
        <StyledPageContainer>
            <StyledLeftTab>
                <StyledLogoContainer>
                    <img src={logo} alt="logo" />
                    <StyledLogoName>Team Name</StyledLogoName>
                </StyledLogoContainer>
                <StyledTabItemContainer>
                    <TabItem logo={groupIcon} name="Group" />
                </StyledTabItemContainer>
            </StyledLeftTab>

            <StyledRightContent>
                <img src={emptyFolder} alt="Login Page " />
            </StyledRightContent>
        </StyledPageContainer>
    );
}

const StyledTabItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  margin-top: 2rem;
`;
const StyledPageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: stretch;
`;

const StyledLogoName = styled.h1`
  font-size: 1.2rem;
  font-family: "Sora", sans-serif;
  line-height: 1rem;
  margin-left: 10px;
  align-self: start;
  padding-top: 5px;
`;

const StyledLeftTab = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: ${Color.gray300}};
    justify-content: flex-start;
    align-items: center;
    border-right: 1px solid red;

`;

const StyledRightContent = styled.div`
  display: flex;
  flex: 5;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const StyledLogoContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
