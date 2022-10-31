import React from 'react'
import styled from "styled-components"

export default function TabItem({ logo, name, onClick, selected }) {
    return (
        <StyledTabContainer onClick={onClick} selected>
            <img src={logo} alt="logo" color='white' />
            <StyledItemName>{name}</StyledItemName>
        </StyledTabContainer>
    )
}

const StyledTabContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    cursor: pointer;
`
const StyledItemName = styled.p`
    padding-left: 10px;
    font-size: 1rem;
    font-style: thin;
    font-weight: 300;
    font-family: 'Public Sans', sans-serif;
`