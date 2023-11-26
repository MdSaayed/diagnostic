import React from 'react';
import SectionHeading from '../sectionTitle/SectionHeading';
import { CiSearch } from "react-icons/ci";


const Facilities = () => {
    return (
        <div className='max-w-6xl mx-auto py-16'>
            <SectionHeading heading={`Find health facilities<br/> that serve COVID-19.`} textStyle={`center`} />
            <div>
                <div className='flex items-center justify-center mt-8'>
                    <input className='border rounded-full w-[24rem] px-4  py-1' type="text" placeholder='Can we help you find something?' />
                    <button className='bg-[#0067FF] text-white p-2 rounded-full -ml-8'><CiSearch /></button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 pt-12">
                    <div className='bg-[#D9E8FF] p-8 rounded-md'>
                        <h2 className="font-bold text-xl text-[#0067FF] text-center">Vaccination</h2>
                    </div>
                    <div className='bg-[#FFF0CF] p-8 rounded-md'>
                        <h2 className="font-bold text-xl text-[#FEB60D] text-center">PCR Test</h2>
                    </div>
                    <div className='bg-[#EAE3FF] p-8 rounded-md'>
                        <h2 className="font-bold text-xl text-[#9771FF] text-center">Covid Test</h2>
                    </div>
                    <div className='bg-[#CCF0F3] p-8 rounded-md'>
                        <h2 className="font-bold text-xl text-[#01B5C5] text-center">Oxygen Tube</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;