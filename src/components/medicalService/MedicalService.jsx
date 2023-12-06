import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import SectionHeading from '../sectionHeading/SectionHeading';

const MedicalService = () => {
    return (
        <div className='max-w-6xl mx-auto py-16'>
            <SectionHeading heading={`Our medical services`} desc={`Cutting-edge diagnostic services for precise health insights,<br/> ensuring accurate and timely results for patients.`} textStyle={'center'} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8">
                <div className="text-[#181A1E] p-4 rounded-md flex flex-col items-start hover:shadow-md">
                    <h2 className="text-2xl font-bold mt-4 mb-2 text-right">Cancer Care</h2>
                    <p>Comprehensive cancer care, combining cutting-edge treatments with compassionate support for a journey towards healing and hope.</p>
                    <div className=" flex flex-col items-center py-2">
                        <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full hover:text-white hover:bg-[#0067FF] border" />
                    </div>
                </div>
                <div className="text-[#181A1E] p-4 rounded-md flex flex-col items-start hover:shadow-md">
                    <h2 className="text-2xl font-bold mt-4 mb-2 text-right">Labor & Delivery</h2>
                    <p>Exceptional labor and delivery services, providing a nurturing environment for a safe and joyous childbirth experience.</p>
                    <div className=" flex flex-col items-center py-2">
                        <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full hover:text-white hover:bg-[#0067FF] border" />
                    </div>
                </div>
                <div className="text-[#181A1E] p-4 rounded-md flex flex-col items-start hover:shadow-md">
                    <h2 className="text-2xl font-bold mt-4 mb-2 text-right">Heart & Vascular</h2>
                    <p>Leading-edge heart and vascular care, prioritizing cardiovascular health with expertise, precision, and compassionate support.</p>
                    <div className=" flex flex-col items-center py-2">
                        <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full hover:text-white hover:bg-[#0067FF] border" />
                    </div>
                </div>
                <div className="text-[#181A1E] p-4 rounded-md flex flex-col items-start hover:shadow-md">
                    <h2 className="text-2xl font-bold mt-4 mb-2 text-right">Mental Health</h2>
                    <p>Comprehensive mental health services, fostering well-being with expert care, understanding, and personalized support for every individual's journey.</p>
                    <div className=" flex flex-col items-center py-2">
                        <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full hover:text-white hover:bg-[#0067FF] border" />
                    </div>
                </div>
                <div className="text-[#181A1E] p-4 rounded-md flex flex-col items-start hover:shadow-md">
                    <h2 className="text-2xl font-bold mt-4 mb-2 text-right">Neurology</h2>
                    <p>Specialized neurology services offering advanced diagnostics and compassionate care for comprehensive neurological well-being.</p>
                    <div className=" flex flex-col items-center py-2">
                        <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full hover:text-white hover:bg-[#0067FF] border" />
                    </div>
                </div>
                <div className="text-[#181A1E] p-4 rounded-md flex flex-col items-start hover:shadow-md">
                    <h2 className="text-2xl font-bold mt-4 mb-2 text-right">Burn Treatment</h2>
                    <p>Advanced burn treatment with a focus on healing and recovery, combining expertise and compassionate care.</p>
                    <div className=" flex flex-col items-center py-2">
                        <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full hover:text-white hover:bg-[#0067FF] border" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalService;