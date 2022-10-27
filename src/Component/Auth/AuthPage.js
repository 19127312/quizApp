import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { StyledInputContainer, StyledInputRowContainer, InputRadio, StyledLabel } from './Input'
import { Color, Image } from '../Constant'
import loginPagePicture from '../assets/loginPagePicture.png'
import { StyledButton } from './Button'
export default function AuthPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [isSignup, setIsSignup] = useState(true);
    const [select, setSelect] = useState("Student");

    const handleSelectChange = event => {
        const value = event.target.value;
        setSelect(value);
    };

    const handleSubmit = (e) => {
        console.log(email, pwd);
    }
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }
    return (
        <AuthContainer>

            <AuthFormContainer>
                <StyledHeadline>{isSignup ? "Create an account" : "Login to your account"}</StyledHeadline>
                {
                    isSignup ? <StyledInputContainer
                        label="Full name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} /> : <></>
                }

                <StyledInputContainer
                    label="Email"
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <StyledInputContainer
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)} />

                {
                    isSignup ? <StyledInputRowContainer>
                        <StyledQuestion>You are ?</StyledQuestion>
                        <InputRadio
                            label="Student"
                            value="Student"
                            checked={select === "Student"}
                            onChange={event => handleSelectChange(event)} />
                        <InputRadio
                            label="Teacher"
                            value="Teacher"
                            checked={select === "Teacher"}
                            onChange={event => handleSelectChange(event)} />
                    </StyledInputRowContainer> : <></>
                }

                <StyledButton marginSize={isSignup ? 1 : 2} onClick={handleSubmit} >{isSignup ? "Sign Up" : "Sign In"}</StyledButton>
                <StyledQuestionSignUp>Already have an account?</StyledQuestionSignUp>
                <StyledSignMode onClick={switchMode}>{isSignup ? "Sign In" : "Sign Up"}</StyledSignMode>
            </AuthFormContainer>
            <AuthContainerImage >
                <img src={loginPagePicture} />
                <StyledImagePhrase>Welcome to Education Platform</StyledImagePhrase>
                <StyledImageSecondPhrase>For student and teacher</StyledImageSecondPhrase>
            </AuthContainerImage>
        </AuthContainer>

    )
}

const StyledQuestion = styled.p`
    font-size: 1rem;
    font-family: 'Public Sans', sans-serif;
    font-weight: 600;
    font-style: bold;
    margin: 1rem 2rem;
`
const AuthContainer = styled.div`
    height: 100vh;
    display: flex;
    align-content: stretch;

`;
const AuthFormContainer = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;

`
const AuthContainerImage = styled.div`
    flex:1;
    background-color: ${Color.secondary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const StyledImagePhrase = styled.p`
    color: white;
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-family: 'Sora', sans-serif;
    font-weight: 700;
    font-style: bold;
    margin: 0.5rem 0;
`
const StyledImageSecondPhrase = styled(StyledImagePhrase)`
    font-size: 1.2rem;
    font-weight: 400;
    font-family: 'Public Sans', sans-serif;
`
const StyledHeadline = styled.h1`
    font-size: 2rem;
    font-family: 'Sora', sans-serif;
    line-height: 2rem;
    margin: 0 0 2rem 0;
`
const StyledQuestionSignUp = styled.p`
    font-size: 0.9rem;
    font-family: 'Public Sans', sans-serif;
    font-weight: 400;
    margin: 0.5rem 0;
`
const StyledSignMode = styled(StyledQuestionSignUp)`
    color: ${Color.primary};
    cursor: pointer;
    margin: 0;
    text-decoration: underline;
`