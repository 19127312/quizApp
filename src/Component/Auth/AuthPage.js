import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { StyledInputContainer, StyledInputRowContainer, InputRadio } from './Input'
import { Color } from '../Constant'
import loginPagePicture from '../assets/loginPagePicture.png'
import { StyledButton } from './Button'
export default function AuthPage() {
    const [fullName, setfullName] = useState("")
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const [isSignup, setIsSignup] = useState(true);
    const [select, setSelect] = useState("Student");


    const [error, setError] = useState({
        email: "",
        password: "",
        fullName: "",
    })


    const handleSelectChange = event => {
        const value = event.target.value;
        setSelect(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            if (fullName.length === 0) {
                setError(prev => ({ ...prev, fullName: "Full name is required" }))
            } else {
                setError(prev => ({ ...prev, fullName: "" }))
            }
        }

        if (email.length === 0) {
            console.log("Hello")
            setError(prev => ({ ...prev, email: "Email is required" }))
        } else if (email.includes("@") === false) {
            setError(prev => ({ ...prev, email: "Email is invalid" }))
        } else {
            setError(prev => ({ ...prev, email: "" }))
        }

        if (pwd.length === 0) {
            setError(prev => ({ ...prev, password: "Password is required" }))
        } else if (pwd.length < 6) {
            setError(prev => ({ ...prev, password: "Password must be at least 6 characters" }))
        } else {
            setError(prev => ({ ...prev, password: "" }))
        }

    }
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setError({ email: "", password: "", fullName: "" })
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
                        value={fullName}
                        error={error.fullName ? error.fullName : null}
                        onChange={(e) => setfullName(e.target.value)} /> : <></>
                }

                <StyledInputContainer
                    label="Email"
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    error={error.email ? error.email : null}
                    onChange={(e) => setEmail(e.target.value)} />
                <StyledInputContainer
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={pwd}
                    error={error.password ? error.password : null}
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
                <img src={loginPagePicture} alt="Login Page " />
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