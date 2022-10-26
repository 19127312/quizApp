import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { StyledInput } from './Input'
import { StyledButton } from './Button'
export default function AuthPage() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [isLogin, setIsLogin] = useState(true);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, pwd);
    }
    return (
        <AuthContainer>
            <StyledNameCompany>Welcome</StyledNameCompany>
            <StyledHeader>{isLogin ? "Login to your account" : "Create an account"}</StyledHeader>
            <StyledForm onSubmit={handleSubmit}>
                <StyledInput
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <StyledInput
                    type="password"
                    placeholder="Password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                />
                <StyledButton >{isLogin ? "Sign In" : "Sign Up"}</StyledButton>
            </StyledForm>
        </AuthContainer>

    )
}
const StyledNameCompany = styled.h2`
    font-size: 2rem;
    margin: 3rem 0 2rem 0
`
const StyledHeader = styled.h1`
    font-size: 1rem;
    `

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    justify-content: space-around;
    align-items: center;
    height: 40%;
    width: 100%;
`
const AuthContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: rgba(52,52,54,255);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 25vw;
    height: 50vh;
    background-color: #fff;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    border-radius: 20px;
`;

