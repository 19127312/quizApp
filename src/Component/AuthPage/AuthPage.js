import React, { useState, useContext } from 'react'
import styled from "styled-components"
import { ThreeDots } from 'react-loader-spinner'
import AuthContext from '../../Context/AuthProvider'
import { Color } from '../../Constants/Constant'
import loginPagePicture from '../../Assets/loginPagePicture.png'
import logo from '../../Assets/logo.png'
import { StyledButton } from './Button'
import { signup, login } from '../../API/api'
import { useNavigate, useLocation, } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Icon } from 'react-icons-kit'
import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'

export default function AuthPage({ mode }) {
    const { setAuth } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [isSignup, setIsSignup] = useState(mode === "register" ? true : false);
    // const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState("")

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const [userData, setUserData] = useState({})
    const queryClient = useQueryClient()

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

    const { isError, error, isLoading, mutateAsync } = useMutation(
        signup,
        {
            onError: (error) => {
                setServerError(error.message);
            },
            onSuccess: (data) => {
                setAuth({ user: data.data.user });
                navigate(from);
            },

        }
    );

    const onSubmit = async (values) => {
        try {
            await mutateAsync({
                fullName: values.fullName,
                email: values.email,
                password: values.password,
            });
        } catch (error) {

        }


    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setServerError("")
        navigate("/" + (isSignup ? "login" : "register"), { replace: true });
        reset({
            fullName: "",
            email: "",
            password: "",

        })

    }

    return (
        <AuthContainer>

            <AuthFormWrapper>
                <StyledLogoContainer>
                    <img src={logo} alt="logo" />
                    <StyledLogoName>Team Name</StyledLogoName>
                </StyledLogoContainer>
                <StyledHeadline>{isSignup ? "Create an account" : "Login to your account"}</StyledHeadline>
                {serverError && <StyledError>{serverError}</StyledError>}

                <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
                    {
                        isSignup && <StyledInputBox>
                            <StyledErrorBox hasError={errors.fullName}>
                                <StyledLabel htmlFor='fullName'>Full Name</StyledLabel>
                                <StyledInput id="fullName" {...register('fullName', { required: true, maxLength: 30 })} placeholder="Enter your name" />
                            </StyledErrorBox>
                            {
                                errors.fullName?.type === "required" && <StyledErrorMessage>Full Name is required</StyledErrorMessage>
                            }
                        </StyledInputBox>
                    }
                    <StyledInputBox>
                        <StyledErrorBox hasError={errors.email}>
                            <StyledLabel htmlFor='email'>Email</StyledLabel>
                            <StyledInput id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder="abc@gmail.com" />
                        </StyledErrorBox>
                        {
                            errors.email?.type === "required" && <StyledErrorMessage>Email is required</StyledErrorMessage>
                        }
                        {
                            errors.email?.type === "pattern" && <StyledErrorMessage>Invalid Email</StyledErrorMessage>
                        }
                    </StyledInputBox>

                    <StyledInputBox>
                        <StyledErrorBox hasError={errors.password}>
                            <StyledLabel htmlFor='password'>Password</StyledLabel>
                            <StyledInputRowContainer>
                                <StyledInput id="password" {...register('password', { required: true, minLength: 6 })} placeholder="Enter your password" type={type} />
                                <StyledInputPasswordIcon onClick={handleToggle} >
                                    <Icon icon={icon} size={20} />
                                </StyledInputPasswordIcon>
                            </StyledInputRowContainer>

                        </StyledErrorBox>
                        {
                            errors.password?.type === "required" && <StyledErrorMessage>Password is required</StyledErrorMessage>
                        }
                        {
                            errors.password?.type === "minLength" && <StyledErrorMessage>Password must be at least 6 digit!</StyledErrorMessage>
                        }

                    </StyledInputBox>

                    {
                        isSignup && <StyledInputRowContainer>
                            <StyledQuestion>You are ?</StyledQuestion>
                            <span>
                                <input type="radio" cursor="pointer" {...register("type")} value="Student" id="Student" checked={true} />
                                <StyledRadioItem htmlFor="Student">Student</StyledRadioItem>
                            </span>
                            <span>
                                <input type="radio" cursor="pointer" {...register("type")} value="Teacher" id="Teacher" />
                                <StyledRadioItem htmlFor='Teacher'>Teacher</StyledRadioItem>
                            </span>

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
                </AuthFormContainer>

                <StyledQuestionSignUp>{isSignup ? "Already have an account ?" : "Don't have an account ?"}</StyledQuestionSignUp>
                <StyledSignMode onClick={switchMode}>{isSignup ? "Sign In" : "Sign Up"}</StyledSignMode>
            </AuthFormWrapper>
            <AuthContainerImage >
                <img src={loginPagePicture} alt="Login Page " />
                <StyledImagePhrase>Welcome to Education Platform</StyledImagePhrase>
                <StyledImageSecondPhrase>For student and teacher</StyledImageSecondPhrase>

            </AuthContainerImage>
        </AuthContainer>

    )
}

const StyledRadioItem = styled.label`
  font-family: 'Public Sans', sans-serif;
  font-weight: 200;
  font-style: thin;
  font-size: 1rem;
  margin: 0 1rem 0 0.5rem;
`
const StyledInputPasswordIcon = styled.span`
  padding: 0.5rem;
  cursor: pointer;
`
const StyledInputRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

const StyledErrorBox = styled.div`
  border-style: solid;
  border-width: 2px;
  border-color: ${props => props.hasError ? "red" : "rgb(248, 244, 244)"} ;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
`
const StyledErrorMessage = styled.p`
  color: ${Color.error100};
  background-color: ${Color.error300};
  padding-left: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-radius: 0.25rem;
  font-family: 'Public Sans', sans-serif;
  font-size: 0.80rem;
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
const AuthFormWrapper = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;

`
const AuthFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
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