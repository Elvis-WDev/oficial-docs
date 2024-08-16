

import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';
import { getUserFromLocalStorage } from '../services/persistUser.service';
import { logout } from '../redux/auth/auth.slice';

const { VITE_API_URL } = getEnvVariables();



export const api_elvisdevdocs = axios.create({

    baseURL: VITE_API_URL

})

// Interceptor de solicitudes
api_elvisdevdocs.interceptors.request.use(
    config => {

        const user = getUserFromLocalStorage();

        if (user?.token) {
            config.headers.Authorization = `Bearer ${user?.token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


// Interceptor de respuestas
api_elvisdevdocs.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {

            logout()

        }
        return Promise.reject(error);
    }
);