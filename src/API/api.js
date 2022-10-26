import axios from 'axios';

export default axios.create({
    baseURL: 'https://apiquizeducation.herokuapp.com'
});

export const PATH = {
    LOGIN: '/users/login',
    REGISTER: '/users/register',
}