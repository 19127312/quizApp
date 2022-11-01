import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    // baseURL: "http://localhost:3000",
});

export const PATH = {
    LOGIN: '/users/login',
    REGISTER: '/users/register',
}

export const login = async ({ email, password }) => {
    try {
        const response = await api.post(PATH.LOGIN, { email, password });
        return response;
    } catch (error) {
        return error;
    }
}


export const signup = async ({ fullName, email, password }) => {
    console.log(fullName, email, password);
    try {
        const response = await api.post(PATH.REGISTER, { fullName, email, password });
        return response;
    } catch (error) {
        throw Error(error.response.data.error);;
    }
}


