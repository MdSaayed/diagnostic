import React from 'react';
import useTest from './../../../components/hooks/useTest';
import { format } from 'date-fns';
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const AllTestTable = () => {
    const [tests, loading, refetch] = useTest();
    const axiosSecuire = useAxiosSecure();


    const formatDate = (dateString) => {
        const parsedDate = new Date(dateString);
        return format(parsedDate, 'MMMM dd, yyyy');
    };


    // handle delete test
    const handleDelete = (id) => {
        const res = axiosSecuire.delete(`tests/${id}`);
        if (res) {
            refetch();
            toast.success('Deleted.');
        }
    }

    return (
        <div className="overflow-x-auto">
            {tests.length < 1 ? (
                <div className='w-full h-[90vh] flex items-center justify-center'>
                    <p>No data found.</p>
                </div>
            ) : (
                <div>
                    <h2 className="text-3xl text-center py-4">All Test</h2>
                    <table className="min-w-full border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Image</th>
                                <th className="border border-gray-300 px-4 py-2">Test Name</th>
                                <th className="border border-gray-300 px-4 py-2">Price</th>
                                <th className="border border-gray-300 px-4 py-2">Date</th>
                                <th className="border border-gray-300 px-4 py-2">Slots</th>
                                <th className="border border-gray-300 px-4 py-2">Details</th>
                                <th className="border border-gray-300 px-4 py-2">Update</th>
                                <th className="border border-gray-300 px-4 py-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tests.map((test, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                                    <td className="border border-gray-300 px-4 py-2 text-center"><img className='w-[100px]' src={test?.image} alt="" /></td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{test?.testName}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">${test?.price}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{formatDate(test?.date)}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{test?.slot}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{test?.details?.length > 15 ? test?.details.slice(0, 15) + '...' : test.details}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center cursor-pointer"><Link to={`/dashboard/test/update/${test._id}`}><FaRegEdit /></Link></td>
                                    <td onClick={() => handleDelete(test._id)} className="border border-gray-300 px-4 py-2 text-center cursor-pointer"><AiOutlineDelete /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AllTestTable;
