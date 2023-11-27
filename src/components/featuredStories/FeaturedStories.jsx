import React from 'react';
import { GiRoundStar } from 'react-icons/gi';
import { IoIosArrowRoundForward } from 'react-icons/io';
import SectionHeading from '../sectionHeading/SectionHeading';

const FeaturedStories = () => {
    return (
        <div className='bg-gradient-to-r from-[#01b5c50c]'>
            <div className='max-w-6xl mx-auto py-16'>
                <SectionHeading heading={`Featured stories`} desc={`World-class care for everyone. Our health System <br/>offers unmatched, expert health care.`} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
                    <div className="text-[#181A1E] p-4 rounded-md flex flex-col  shadow hover:shadow-md">
                        <img className="w-full" src="https://i.ibb.co/sKF9qLz/Images-3.png" alt="" />
                        <div>
                            <h2 className="text-xl font-bold mt-4 mb-2 text-[#181A1E]">7 School Lunch Tips for Picky Eaters</h2>
                            <div className="mt-4 flex items-center justify-between">
                                <div>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ea earum libero fuga natus debitis!</p>
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
                            <h2 className="text-xl font-bold mt-4 mb-2 text-[#181A1E]">7 School Lunch Tips for Picky Eaters</h2>
                            <div className="mt-4 flex items-center justify-between">
                                <div>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ea earum libero fuga natus debitis!</p>
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
                            <h2 className="text-xl font-bold mt-4 mb-2 text-[#181A1E]">7 School Lunch Tips for Picky Eaters</h2>
                            <div className="mt-4 flex items-center justify-between">
                                <div>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ea earum libero fuga natus debitis!</p>
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