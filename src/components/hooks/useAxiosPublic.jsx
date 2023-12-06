import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://server-henna-phi.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;