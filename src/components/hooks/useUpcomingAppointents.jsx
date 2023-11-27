import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUpcomingAppointents = () => {
    const axiosSecuire = useAxiosSecure();
    const { data: upcomingAppointments = [], isPending: loading, refetch } = useQuery({
        queryKey: ['upcomingAppointments'],
        queryFn: async () => {
            const res = await axiosSecuire.get('/bookings');
            return res.data
        }
    })

    return [upcomingAppointments, loading, refetch];
};

export default useUpcomingAppointents;