import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const { user } = useAuth();
    const axiosSecuire = useAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecuire.get(`users/admin/${user?.email}`);
            console.log(res.data?.admin);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;