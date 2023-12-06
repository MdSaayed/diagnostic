import React from 'react';
import { GiRoundStar } from 'react-icons/gi';
import { IoIosArrowRoundForward } from 'react-icons/io';
import SectionHeading from '../sectionHeading/SectionHeading';

const FeaturedStories = () => {
    return (
        <div className='bg-gradient-to-r from-[#01b5c50c]'>
            <div className='max-w-6xl mx-auto py-16'>
                <SectionHeading heading={`Featured stories`} desc={`Explore inspiring narratives of resilience, recovery, <br/>and triumph – our featured stories showcase remarkable healthcare journeys.`} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
                    <div className="text-[#181A1E] p-4 rounded-md flex flex-col  shadow hover:shadow-md">
                        <img className="w-full" src="https://i.ibb.co/sKF9qLz/Images-3.png" alt="" />
                        <div>
                            <h2 className="text-xl font-bold mt-4 mb-2 text-[#181A1E]">Stories of Overcoming Medical Challenges</h2>
                            <div className="mt-4 flex items-center justify-between">
                                <div>
                                    <p>Inspiring stories of overcoming medical challenges, revealing resilience, recovery, and triumphant healthcare journeys.</p>
                                </div>
                                <div className=" flex flex-col items-center py-2">
                                    <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full border hover:text-white hover:bg-[#0067FF]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#181A1E] p-4 rounded-md flex flex-col  shadow hover:shadow-md">
                        <img className="w-full" src="https://i.ibb.co/sgZBKjb/Images-2.png" alt="" />
                        <div>
                            <h2 className="text-xl font-bold mt-4 mb-2 text-[#181A1E]">Personal Tales of Medical Resilience</h2>
                            <div className="mt-4 flex items-center justify-between">
                                <div>
                                    <p>Personal tales showcasing strength, resilience, and recovery, highlighting courage in medical challenges.</p>
                                </div>
                                <div className=" flex flex-col items-center py-2">
                                    <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full border hover:text-white hover:bg-[#0067FF]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#181A1E] p-4 rounded-md flex flex-col  shadow hover:shadow-md">
                        <img className="w-full" src="https://i.ibb.co/3fd578V/Images-1.png" alt="" />
                        <div>
                            <h2 className="text-xl font-bold mt-4 mb-2 text-[#181A1E]">Inspiring Journeys of Wellness and Recovery</h2>
                            <div className="mt-4 flex items-center justify-between">
                                <div>
                                    <p>Uplifting stories of wellness and recovery, capturing the power of resilience in healthcare journeys.</p>
                                </div>
                                <div className=" flex flex-col items-center py-2">
                                    <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full border hover:text-white hover:bg-[#0067FF]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedStories;