import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import useTest from "../../../components/hooks/useTest";
import useReservation from "../../../components/hooks/useReservation";


const AdminHome = () => {
    const axiosSecuire = useAxiosSecure();
    const [tests] = useTest();
    const [reservation] = useReservation();
    const { data: totalUser = [], refetch } = useQuery({
        queryKey: ['totalUser'],
        queryFn: async () => {
            const res = await axiosSecuire.get(`/users`);
            return res.data;
        }
    });
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-6 rounded text-white bg-[#0802A3]">
                    <h2 className="text-2xl text-center">Total Users</h2>
                    <h2 className="text-5xl text-center">{totalUser?.length}</h2>
                </div>
                <div className="p-6 rounded text-white bg-[#FF4B91]">
                    <h2 className="text-2xl text-center">Total Tests</h2>
                    <h2 className="text-5xl text-center">{tests?.length}</h2>
                </div>
                <div className="p-6 rounded text-white bg-[#FF7676]">
                    <h2 className="text-2xl text-center">Total Reservation</h2>
                    <h2 className="text-5xl text-center">{reservation?.length}</h2>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;