import React, { useState, useContext } from 'react'
import styled from "styled-components"
import { ThreeDots } from 'react-loader-spinner'
import AuthContext from '../../Context/AuthProvider'
import { StyledInputContainer, StyledInputRowContainer, InputRadio } from './Input'
import { Color } from '../../Constants/Constant'
import loginPagePicture from '../../Assets/loginPagePicture.png'
import logo from '../../Assets/logo.png'
import { StyledButton } from './Button'
import axios from '../../API/api'
import { PATH } from '../../API/api'
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

export default function AuthPage({ mode }) {
    const { setAuth } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const [fullName, setfullName] = useState("")
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const [isSignup, setIsSignup] = useState(mode == "register" ? true : false);
    const [type, setType] = useState("Student");

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState({
        email: "",
        password: "",
        fullName: "",
    })

    const [serverError, setServerError] = useState("")


    const handleSelectChange = event => {
        const value = event.target.value;
        setType(value);
    };

    const handleSubmit = async (e) => {
        let hasError = false;
        e.preventDefault();
        if (isSignup) {
            if (fullName.length === 0) {
                setError(prev => ({ ...prev, fullName: "Full name is required" }))
                hasError = true;
            } else {
                setError(prev => ({ ...prev, fullName: "" }))
            }
        }

        if (email.length === 0) {
            setError(prev => ({ ...prev, email: "Email is required" }))
            hasError = true;
        } else if (email.includes("@") === false) {
            setError(prev => ({ ...prev, email: "Email is invalid" }))
            hasError = true;
        } else {
            setError(prev => ({ ...prev, email: "" }))
        }

        if (pwd.length === 0) {
            setError(prev => ({ ...prev, password: "Password is required" }))
            hasError = true;

        } else if (pwd.length < 6) {
            setError(prev => ({ ...prev, password: "Password must be at least 6 characters" }))
            hasError = true;
        } else {
            setError(prev => ({ ...prev, password: "" }))
        }


        if (!hasError) {

            setIsLoading(true);
            if (isSignup) {
                await authenticateMode(PATH.REGISTER, {
                    email,
                    password: pwd,
                    fullName,
                    type
                });
            } else {
                await authenticateMode(PATH.LOGIN, {
                    email,
                    password: pwd
                });
            }
        }



    }
    const authenticateMode = async (path, requestData) => {
        try {
            const { data } = await axios.post(path, JSON.stringify(requestData),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
            setServerError("")
            // setAuth({ user: data.user, token: data.token });
            setAuth({ user: data.user });
            setIsLoading(false);
            navigate(from, { replace: true });

        } catch (error) {
            setServerError(error.response.data.error)
            setIsLoading(false);

        }
    }
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setError({ email: "", password: "", fullName: "" })
        setServerError("")
        navigate("/" + (isSignup ? "login" : "register"), { replace: true });
    }


    return (
        <AuthContainer>

            <AuthFormContainer>
                <StyledLogoContainer>
                    <img src={logo} alt="logo" />
                    <StyledLogoName>Team Name</StyledLogoName>
                </StyledLogoContainer>
                <StyledHeadline>{isSignup ? "Create an account" : "Login to your account"}</StyledHeadline>
                {serverError && <StyledError>{serverError}</StyledError>}
                {
                    isSignup && <StyledInputContainer
                        label="Full name"
                        type="text"
                        placeholder="Enter your name"
                        value={fullName}
                        error={error.fullName ? error.fullName : null}
                        onChange={(e) => setfullName(e.target.value)} />
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
                    isSignup && <StyledInputRowContainer>
                        <StyledQuestion>You are ?</StyledQuestion>
                        <InputRadio
                            label="Student"
                            value="Student"
                            checked={type === "Student"}
                            onChange={event => handleSelectChange(event)} />
                        <InputRadio
                            label="Teacher"
                            value="Teacher"
                            checked={type === "Teacher"}
                            onChange={event => handleSelectChange(event)} />
                    </StyledInputRowContainer>
                }
                {
                    isLoading ? <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color={Color.primary}
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    /> :
                        <StyledButton marginSize={isSignup ? 1 : 2} onClick={handleSubmit} >{isSignup ? "Sign Up" : "Sign In"}</StyledButton>
                }

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

const StyledLogoContainer = styled.div`
    position: absolute;
    top: 30px;
    left: 30px;
    display: flex;
    align-items: center;
`

const StyledLogoName = styled.h1`
    font-size: 1.5rem;
    font-family: 'Sora', sans-serif;
    line-height: 2rem;
    margin-left: 10px;
`

const StyledQuestion = styled.p`
    font-size: 1rem;
    font-family: 'Public Sans', sans-serif;
    font-weight: 600;
    font-style: bold;
    margin: 1rem 2rem;
`
const StyledError = styled.p`
    font-size: 1rem;
    font-family: 'Public Sans', sans-serif;
    color: ${Color.error100};
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