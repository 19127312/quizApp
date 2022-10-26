import React from 'react'
import styled from "styled-components"
export default function AuthPage() {
    return (
        <AuthContainer>
            <div>
                "Hessd"
            </div>
        </AuthContainer>
    )
}


const AuthContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30vw;
    height: 80vh;
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`