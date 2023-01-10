import axios from "axios"

const AUTHAPI = axios.create({ baseURL: 'https://pac-auth.herokuapp.com/api/v1/trustees' })
const AUTHAPIWithToken = axios.create({ baseURL: 'https://pac-auth.herokuapp.com/api/v1/trustees' })

AUTHAPI.interceptors.request.use(
    async config => {
        // const credentials = await Keychain.getGenericPassword();
        // config.headers['Authorization'] = `Bearer ${credentials?.password}`;
        config.headers['x-api-key'] = `PAC-AUTH`;
        console.log("Payload", config.data)

        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

export const signIn = (values) => AUTHAPI.post('/signIn', values)

export const register = (payload) => AUTHAPI.post('/authenticate', payload)

export const verifyEmail = (values) => AUTHAPI.post('/verifyEmailCode', values)