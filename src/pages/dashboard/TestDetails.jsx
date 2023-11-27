import { IoMdTime } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';
import { useLoaderData } from 'react-router-dom';
import { format } from 'date-fns';
import { FiDollarSign } from "react-icons/fi";


const TestDetails = () => {
    const { testName, image, details, slot,date,price } = useLoaderData();

    const formatDate = (dateString) => {
        const parsedDate = new Date(dateString);
        return format(parsedDate, 'MMMM dd, yyyy');
    };
    return (
        <div className='max-w-6xl mx-auto py-16'>
            <div>
                <div className=''>
                    <img className='w-full h-[300px] object-fill rounded-sm' src={image} alt="" />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 py-6'>
                    <div className='col-span-3'>
                        <h2 className="text-3xl font-bold mb-3">{testName}</h2>
                        <p>{details}</p>
                    </div>
                    <div className='border p-4 mt-8 md:mt-0'>
                        <div className="flex gap-2 items-center mb-3"><IoMdTime className="text-[17px]"></IoMdTime> <span className="text-[14px]">{slot}</span></div>
                        <div className="flex gap-2 items-center mb-3"><SlCalender className="text-[14px]" /> <span className="text-[14px]">{formatDate(date)}</span></div>
                        <div className="flex gap-2 items-center mb-3"><FiDollarSign className="text-[14px]" /> <span className="text-[14px]">{price}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestDetails;