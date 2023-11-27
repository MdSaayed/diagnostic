import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import SectionHeading from '../sectionHeading/SectionHeading';

const MedicalService = () => {
    return (
        <div className='max-w-6xl mx-auto py-16'>
            <SectionHeading heading={`Our medical services`} desc={`World-class care for everyone. Our health System offers <br/> unmatched, expert health care.`} textStyle={'center'} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8">
                <div className="text-[#181A1E] p-4 rounded-md flex flex-col items-start hover:shadow-md">
                    <h2 className="text-2xl font-bold mt-4 mb-2 text-right">Cancer Care</h2>
                    <p>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
                    <div className=" flex flex-col items-center py-2">
                        <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full hover:text-white hover:bg-[#0067FF] border" />
                    </div>
                </div>
                <div className="text-[#181A1E] p-4 rounded-md flex flex-col items-start hover:shadow-md">
                    <h2 className="text-2xl font-bold mt-4 mb-2 text-right">Labor & Delivery</h2>
                    <p>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
                    <div className=" flex flex-col items-center py-2">
                        <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full hover:text-white hover:bg-[#0067FF] border" />
                    </div>
                </div>
                <div className="text-[#181A1E] p-4 rounded-md flex flex-col items-start hover:shadow-md">
                    <h2 className="text-2xl font-bold mt-4 mb-2 text-right">Heart & Vascular</h2>
                    <p>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
                    <div className=" flex flex-col items-center py-2">
                        <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full hover:text-white hover:bg-[#0067FF] border" />
                    </div>
                </div>
                <div className="text-[#181A1E] p-4 rounded-md flex flex-col items-start hover:shadow-md">
                    <h2 className="text-2xl font-bold mt-4 mb-2 text-right">Mental Health</h2>
                    <p>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
                    <div className=" flex flex-col items-center py-2">
                        <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full hover:text-white hover:bg-[#0067FF] border" />
                    </div>
                </div>
                <div className="text-[#181A1E] p-4 rounded-md flex flex-col items-start hover:shadow-md">
                    <h2 className="text-2xl font-bold mt-4 mb-2 text-right">Neurology</h2>
                    <p>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
                    <div className=" flex flex-col items-center py-2">
                        <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full hover:text-white hover:bg-[#0067FF] border" />
                    </div>
                </div>
                <div className="text-[#181A1E] p-4 rounded-md flex flex-col items-start hover:shadow-md">
                    <h2 className="text-2xl font-bold mt-4 mb-2 text-right">Burn Treatment</h2>
                    <p>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
                    <div className=" flex flex-col items-center py-2">
                        <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full hover:text-white hover:bg-[#0067FF] border" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalService;