import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReservation = () => {
    const axiosSecuire = useAxiosSecure();
    const { data: reservation = [], isPending: loading, refetch } = useQuery({
        queryKey: ['reservation'],
        queryFn: async () => {
            const res = await axiosSecuire.get('/testResult');
            return res.data
        }
    })

    return [reservation, loading, refetch]
};

export default useReservation;