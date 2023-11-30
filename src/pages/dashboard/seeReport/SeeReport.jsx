import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";


const SeeReport = () => {
    const axiosSecuire = useAxiosSecure();
    const { report } = useLoaderData();
    console.log(report);

    // const { data: yourReport = [], refetch } = useQuery({
    //     queryKey: ['yourReport'],
    //     queryFn: async () => {
    //         const res = await axiosSecuire.get(`seeReport/${_id}`);
    //         return res.data;
    //     }
    // });
    return (
        <div className="p-8">
            <div className="border shadow-sm p-16">
                <h2 className="text-3xl text-center text-blue-700 border border-blue-700 py-1 font-bold">Your Report</h2>
                <div className="my-8">
                    <p>{report}</p>
                </div>
            </div>
        </div>
    );
};

export default SeeReport;