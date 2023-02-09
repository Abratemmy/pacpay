import axios from "axios"

const AUTHAPI = axios.create({ baseURL: 'https://pac-auth.herokuapp.com/api/v1/trustees' })
// const AUTHAPIWithToken = axios.create({ baseURL: 'https://pac-auth.herokuapp.com/api/v1/trustees' })

AUTHAPI.interceptors.request.use(
    async config => {
        // const credentials = await Keychain.getGenericPassword();
        // config.headers['Authorization'] = `Bearer ${credentials?.password}`;
        config.headers['x-api-key'] = `PAC-AUTH`;
        console.log("Payload", config.data);
        localStorage.setItem('Payload', JSON.stringify(config.data));

        return config;
    },
    error => {
        return Promise.reject(error);
    },
);


export const signIn = (values) => AUTHAPI.post('/signIn', values)
export const register = (payload) => AUTHAPI.post('/authenticate', payload)
export const verifyEmail = (values) => AUTHAPI.post('/verifyEmailCode', values)
export const sendResetCode = (values) => AUTHAPI.post('/sendResetCode', values)
export const resetverifyEmail = (otpvalues) => AUTHAPI.post('/resetPassword', otpvalues)
export const resendRegisterOtp = (values) => AUTHAPI.post('/resendEmailCode', values)


// for users
const USERAPI = axios.create({ baseURL: 'https://pac-trustees.herokuapp.com/api/v1' })
USERAPI.interceptors.request.use(
    async config => {
        const token = localStorage.getItem(`token`);
        config.headers['x-api-key'] = `PAC-TRUSTEES`;
        // console.log("tokennnnnn", token)
        config.headers['x-access-token'] = JSON.parse(token)
        // console.log("Users", config.data);
        // console.log("headers", config.headers)
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);


export const getLoggedinUser = () => USERAPI.get('/user/me');
export const updateUser = (id, updateUser) => USERAPI.put(`/user/${id}`, updateUser)
export const createPersonalinformation = (newPersonal) => USERAPI.post('/will', newPersonal);
export const updateWill = (updateWill) => USERAPI.put(`/will/user`, updateWill)
export const getProduct = () => USERAPI.get('/resources/product');
export const getUserWill = () => USERAPI.get('/will/user')
export const faqs = () => USERAPI.get('/resources/faq');



// payment api endpoints
const PAYMENTAPI = axios.create({ baseURL: 'https://pac-transactions.herokuapp.com/api/v1' });

PAYMENTAPI.interceptors.request.use(
    async config => {
        const token = localStorage.getItem(`token`);
        config.headers['x-api-key'] = `PAC-TRANSACTION`;
        config.headers['x-access-token'] = JSON.parse(token)
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);
export const chargeCard = (chargeCard) => PAYMENTAPI.post('/trustees/charge', chargeCard)
export const store = (store) => PAYMENTAPI.post('/store', store)


// notification api endpoints
const NOTIFICATIONAPI = axios.create({ baseURL: 'https://pac-notification.herokuapp.com/api/v1/notification' });

NOTIFICATIONAPI.interceptors.request.use(
    async config => {
        const token = localStorage.getItem(`token`);
        config.headers['x-api-key'] = `PAC-NOTIFICATION`;
        config.headers['x-access-token'] = JSON.parse(token)
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

export const getNotification = () => NOTIFICATIONAPI.get('/me?module=trustees');
export const updateNotification = (id, updatedPost) => NOTIFICATIONAPI.put(`/${id}`, updatedPost);



// const ADDUSERAPI = axios.create({ baseURL: 'https://pac-trustees.herokuapp.com/api/v1' })
// export const addUser = (payload, token) =>{
//     console.log("payload123", payload)
//     console.log("token", token)
//     localStorage.setItem('token', JSON.stringify(token));
//     return ADDUSERAPI.post('/user', payload, {headers: {'x-access-token': token, 'x-api-key': 'PAC-TRUSTEES'}});
// } 
