import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const Repport = () => {
    const axiosSecuire = useAxiosSecure();
    const [report, setReport] = useState('');
    const [currentTestId, setCurrentTestId] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [displayData, setDisplayData] = useState([]);

    const { data: testResult = [], isPending: loading, refetch } = useQuery({
        queryKey: ['testResult'],
        queryFn: async () => {
            const res = await axiosSecuire.get(`/testResult`);
            setDisplayData(res.data);
            return res.data;
        }
    });



    // handle add report
    const handleAddReport = (id) => {
        setCurrentTestId(id);
        document.getElementById('my_modal_3').showModal();
    };

    // submit report
    const handleSubmitReport = async () => {
        try {
            const updateReport = {
                report,
                status: 'complete'
            };
            await axiosSecuire.patch(`/addReport/${currentTestId}`, updateReport)
                .then(res => {
                    setReport('');
                    toast.success('Report added successfully.');
                    document.getElementById('my_modal_3').close();
                    refetch();
                })
        } catch (error) {
            console.error('Error adding report:', error);
        }
    };

    // Correct the search functionality
    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredData = testResult.filter(item => item.email.includes(searchTerm));
        setSearchText(searchTerm);
        setDisplayData(filteredData);
    };



    return (
        <div className="overflow-x-auto">
            {testResult.length < 1 ? (
                <div className='w-full h-[90vh] flex items-center justify-center'>
                    <p>No data found.</p>
                </div>
            ) : (
                <>
                    <div>
                        <h2 className="text-3xl text-center py-4">All Reservation</h2>

                    </div>
                    <div className='flex justify-end mb-1'>
                        <form>
                            <input onChange={handleSearch} className='border py-1 px-2 focus:outline-none' placeholder="Search by email" type='text' />
                        </form>
                    </div>
                    <table className="min-w-full border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Test Name</th>
                                <th className="border border-gray-300 px-4 py-2">Email</th>
                                <th className="border border-gray-300 px-4 py-2">Transaction ID</th>
                                <th className="border border-gray-300 px-4 py-2">Date</th>
                                <th className="border border-gray-300 px-4 py-2">Status</th>
                                <th className="border border-gray-300 px-4 py-2">Report</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayData.map((test, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{test?.testName}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{test.email}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{test.transactionId}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{test.date}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{test.status}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {test?.report ? '---' : <button onClick={() => handleAddReport(test._id)} className='text-blue-600'>Add Report</button>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
                            </form>
                            <div id='checkout-form-modal' className='w-[30rem]  p-8'>
                                <textarea onChange={(e) => setReport(e.target.value)} defaultValue={report} className='w-full border p-4' type="text" placeholder='Write a report' name="" id="" cols="30" rows="5"></textarea>
                                <input onClick={handleSubmitReport} className='bg-blue-700 rounded text-white py-[2px] px-2' type="submit" value="Submit" />
                            </div>
                        </div>
                    </dialog>
                </>
            )}
        </div>
    );
};

export default Repport;
