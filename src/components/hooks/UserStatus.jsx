import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "../../hooks/useAuth";


const UserStatus = () => {
    const axiosSecuire = useAxiosSecure();
    const { user } = useAuth();

    const { data: userStatus = [], refetch } = useQuery({
        queryKey: ['userStatus'],
        queryFn: async () => {
            const res = await axiosSecuire.get(`/usersInfo/${user?.email}`);
            return res.data.status;
        }
    });
    return [userStatus];
};

export default UserStatus;