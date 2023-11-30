import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import './test.css';

const Repport = () => {
    const axiosSecuire = useAxiosSecure();
    const [report, setReport] = useState('');
    const [currentTestId, setCurrentTestId] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [displayData, setDisplayData] = useState([]);
    // pagination related 
    const [count, setCount] = useState();
    const [itemPerPage, setItemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0)
    const numberOfPages = Math.ceil(count ? count / itemPerPage : null);
    const pages = [...Array(numberOfPages).keys()];
    const [testResult, seTestResult] = useState([]);

    console.log(count, 'count')
    console.log(itemPerPage, 'itemPerPage')
    console.log(currentPage, 'currentPage')
    console.log(numberOfPages, 'numberOfPages')
    console.log(pages, 'pages')


    // const { data: testResult = [], isPending: loading, refetch } = useQuery({
    //     queryKey: ['testResult'],
    //     queryFn: async () => {
    //         const res = await axiosSecuire.get(`/testResult?page=${currentPage}&size=${itemPerPage}`);
    //         setDisplayData(res.data);
    //         return res.data;
    //     }
    // });

    useEffect(() => {
        fetch(`https://server-henna-phi.vercel.app/testResult?page=${currentPage}&size=${itemPerPage}`)
            .then(res => res.json())
            .then(data => {
                seTestResult(data)
                setDisplayData(data)
            })
    }, [currentPage, itemPerPage]);

    useEffect(() => {
        fetch('https://server-henna-phi.vercel.app/testResultCount')
            .then(res => res.json())
            .then(data => setCount(data.count))
    }, [])


    // next and prvious
    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < numberOfPages - 1) {
            setCurrentPage(currentPage + 1)
        }
    }


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


    // handleCancel
    const handleCancel = (id) => {
        const res = axiosSecuire.patch(`/testsCancel/${id}`);
        if (res) {
            toast.success('Reservation is canceled.');
        }
    }



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
                                <th className="border border-gray-300 px-4 py-2">Action</th>
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
                                        {test.status == 'Canceled' || test.status == 'complete' && test.report !== '' ? '---' : <button onClick={() => handleAddReport(test?._id)} className='text-blue-600'>Add Report</button>}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {test.status !== 'pending' && test.report !== '' ? '---' : <button onClick={() => handleCancel(test._id)} className='text-blue-600'>Cancel</button>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="">
                        <div className='pagination flex gap-4 justify-center mt-8'>
                            <button className='' onClick={handlePrev}>Prev</button>
                            {
                                pages.map(page => <button onClick={() => setCurrentPage(page)} className={currentPage == page ? 'active-pagination' : null} key={page}>{page}</button>)
                            }
                            <button className='' onClick={handleNext}>Next</button>
                        </div>
                    </div>
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



