import React from 'react';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const TestResult = () => {
    const axiosSecuire = useAxiosSecure();
    const { user } = useAuth();

    const { data: testResult = [], isPending: loading, refetch } = useQuery({
        queryKey: ['testResult'],
        queryFn: async () => {
            const res = await axiosSecuire.get(`/testResult/${user?.email}`);
            return res.data
        }
    })

    return (
        <div className="overflow-x-auto">
            {testResult.length < 1 ? <>
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
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testResult.map((test, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                                <td className="border border-gray-300 px-4 py-2 text-center">{test?.testName}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{test.email}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{test.transactionId}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{test.date}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{test.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>}

        </div>
    );
};

export default TestResult;