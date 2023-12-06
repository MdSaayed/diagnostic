import useTest from "../components/hooks/useTest";
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { format } from 'date-fns';
import { Link } from "react-router-dom";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FiDollarSign } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import useAxiosSecure from "../components/hooks/useAxiosSecure";


const AllTest = () => {
    const [displayData, setDisplayData] = useState([]);
    const [date, setDate] = useState(null);
    const [count, setCount] = useState();
    const [itemPerPage, setItemsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0)
    const numberOfPages = Math.ceil(count ? count / itemPerPage : null);
    const pages = [...Array(numberOfPages).keys()];
    const axiosSecure = useAxiosSecure();
    const [tests, setTests] = useState([]);




    useEffect(() => {
        fetch(`https://server-henna-phi.vercel.app/tests?page=${currentPage}&size=${itemPerPage}`)
            .then(res => res.json())
            .then(data => {
                setTests(data);
                setDisplayData(data);
            })
    }, [currentPage, itemPerPage])

    useEffect(() => {
        axiosSecure.get(`/testCount`)
            .then(res => res.data)
            .then(data => setCount(data.count))
    }, [axiosSecure])

    // Adjust the date format used in your database
    const formatDate = (dateString) => {
        if (dateString === '') {
            return dateString;
        } else if (dateString) {
            return format(new Date(dateString), 'MMM dd yyyy');
        }
    };

    // handle search function
    const handleSearch = () => {
        if (date !== null) {
            const formattedSearchDate = formatDate(date);
            const filteredData = tests?.filter(item => formatDate(item?.date) === formattedSearchDate);
            setDisplayData(filteredData);
        } else {
            setDisplayData(tests);
        }
    };

    // Fetch initial data
    useEffect(() => {
        setDisplayData(tests);
    }, [tests]);


    // handle pagination
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

    return (
        <div className="max-w-6xl mx-auto py-16">
            <h2 className="text-3xl font-bold text-center pb-6">All Test</h2>
            <div className='flex justify-end mb-1'>
                <form>
                    <DatePicker
                        selected={date}
                        onChange={(newDate) => {
                            setDate(newDate);
                        }}
                        className="py-1 px-4 border focus:outline-none rounded-sm w-full"
                    />
                    <button
                        type="button"
                        className="ml-2 bg-blue-500 text-white px-4 py-1 rounded"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </form>
            </div>
            {displayData?.length < 1 ? (
                <div className="flex items-center justify-center h-[10vh]">
                    <p>No data found.</p>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {displayData.map(item => (
                            <div key={item._id} className="flex gap-4 shadow-sm rounded border">
                                <div><img className="w-32 h-full rounded-l" src={item?.image} alt="" /></div>
                                <div className="py-2">
                                    <h2 className="font-bold">{item.testName}</h2>
                                    <div className="flex gap-4 mb-2">
                                        <div className="flex gap-2 items-center"><IoMdTime className="text-[13px]"></IoMdTime> <span className="text-[12px]">{item?.time}</span></div>
                                        <div className="flex gap-2 items-center"><SlCalender className="text-[10px]" /> <span className="text-[12px]">{formatDate(item?.date)}</span></div>
                                    </div>
                                    <div className="flex gap-4 mb-2">
                                        <div className="flex items-center">Price: <FiDollarSign className="text-[13px]"></FiDollarSign> <span className="text-[12px]">{item?.price}</span></div>
                                        <div className="flex gap-2 items-center">Available slots: <span className="text-[12px]">{item?.slot}</span></div>
                                    </div>
                                    <div>
                                        <Link to={`/tests/details/${item?._id}`}>
                                            <span className="text-blue-600 flex text-[12px] items-center gap-3">Details<RiArrowRightUpLine /></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {
                        displayData?.length < 1 ? "" : <>
                            <div className="">
                                <div className='pagination flex gap-4 justify-center mt-8'>
                                    <button className='' onClick={handlePrev}>Prev</button>
                                    {pages.map(page => <button onClick={() => setCurrentPage(page)} className={currentPage === page ? 'active-pagination' : null} key={page}>{page}</button>)}
                                    <button className='' onClick={handleNext}>Next</button>
                                </div>
                            </div>
                        </>
                    }
                </>
            )}
        </div>
    );
};

export default AllTest;
