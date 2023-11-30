import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";


const Error = () => {
    return (
        <div>
            <div className='h-screen w-full flex items-center justify-center flex-col'>
                <img className='w-[14rem]' src="https://i.ibb.co/cFv5TPL/Group-18621.png" alt="" />
                <div className='flex items-center text-blue-700 gap-4 border-blue-700 py-1 px-4 border mt-4 rounded-sm'>
                    <FaArrowLeftLong />
                    <Link to={'/'} className='text-blue-700'>Back home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;