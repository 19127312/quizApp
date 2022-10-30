import React, { useState } from 'react'
import styled from "styled-components"
import { Color } from '../../Constants/Constant'
import logo from '../../Assets/logo.png'
import emptyFolder from '../../Assets/emptyFolder.png'
export default function MainPage() {
    return (

        <StyledPageContainer>

            <StyledLeftTab>
                <StyledLogoContainer>
                    <img src={logo} alt="logo" />
                    <StyledLogoName>Team Name</StyledLogoName>
                </StyledLogoContainer>
            </StyledLeftTab>
            <StyledRightContent >
                <img src={emptyFolder} alt="Login Page " />

            </StyledRightContent>
        </StyledPageContainer>

    )
}


const StyledPageContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: stretch;
`

const StyledLogoName = styled.h1`
    font-size: 1rem;
    font-family: 'Sora', sans-serif;
    line-height: 1rem;
    margin-left: 10px;
    padding-bottom: 10px;
`

const StyledLeftTab = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: ${Color.gray300}};
    justify-content: flex-start;
    align-items: center;
    border-right: 1px solid red;

`

const StyledRightContent = styled.div`
    display: flex;
    flex: 5;
    background-color: white;
    justify-content: center;
    align-items: center;

`


const StyledLogoContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
`


