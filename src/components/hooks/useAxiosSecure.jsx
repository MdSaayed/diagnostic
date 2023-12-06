import axios from "axios";
import useAuth from './../../hooks/useAuth';
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://server-henna-phi.vercel.app'
})

const useAxiosSecure = () => {
    const {signOutUser} = useAuth();
    const navigate = useNavigate();
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error);
    })
    // Add a response interceptor
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async function (error) {
        const status = error.response.status;
        if (status === 401 || status === 403){
            signOutUser();
            navigate('/signin');
        }
            return Promise.reject(error);
    });

    return axiosSecure;
};

export default useAxiosSecure;