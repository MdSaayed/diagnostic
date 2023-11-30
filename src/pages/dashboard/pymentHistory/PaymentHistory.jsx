import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const PaymentHistory = () => {
    const axiosSecuire = useAxiosSecure();
    const { user } = useAuth();

    const { data: payments = [], isPending: loading, refetch } = useQuery({
        queryKey: ['paymentsHistory'],
        queryFn: async () => {
            const res = await axiosSecuire.get(`/payments/${user?.email}`);
            return res.data
        }
    })

    return (
        <div className="overflow-x-auto">
            {payments.length < 1 ? <>
                <div className='w-full h-[90vh] flex items-center justify-center'>
                    <p>No data found.</p>
                </div>
            </> : <>
                <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Test Name</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Transaction ID</th>
                            <th className="border border-gray-300 px-4 py-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                                <td className="border border-gray-300 px-4 py-2 text-center">{payment?.testName}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{payment.email}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{payment.transactionId}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{payment.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>}

        </div>
    );
};

export default PaymentHistory;