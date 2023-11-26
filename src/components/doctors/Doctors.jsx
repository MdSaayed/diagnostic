import { IoIosArrowRoundForward } from "react-icons/io";
import SectionHeading from "../sectionTitle/SectionHeading";
import { GiRoundStar } from "react-icons/gi";


const Doctors = () => {
    return (
        <div className="bg-gradient-to-l from-[#01b5c511]">
            <div className='max-w-6xl mx-auto py-16'>
                <SectionHeading heading={`Our great doctors`} desc={`World-class care for everyone. Our health System offers<br/> unmatched, expert health care.`} textStyle='center' />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-16">
                    <div className="text-[#181A1E] p-4 rounded-md flex flex-col  shadow hover:shadow-md">
                        <img className="w-full" src="https://i.ibb.co/ZXQDXXd/Group-18549.png" alt="" />
                        <div>
                            <h2 className="text-2xl font-bold mt-4 mb-2">Dr. Trent Boult</h2>
                            <div className="flex justify-between">
                                <button className="bg-[#FFF0CF] px-4 py-1 rounded-sm text-[#FEB60D]">Surgeon</button>
                                <div className="flex items-center">
                                    <GiRoundStar className="text-[#FEB60D] mr-3" />
                                    <div>
                                        <span className="font-bold">4.8</span>
                                        <span>(177)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <div>
                                    <h2 className="text-[1rem] font-bold">+1500 Patients</h2>
                                    <p>At Mount Adora Hospital, CA</p>
                                </div>
                                <div className=" flex flex-col items-center py-2">
                                    <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full border hover:text-white hover:bg-[#0067FF]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#181A1E] p-4 rounded-md flex flex-col  shadow hover:shadow-md">
                        <img className="w-full" src="https://i.ibb.co/N2F4PPb/Group-18549-1.png" alt="" />
                        <div>
                            <h2 className="text-2xl font-bold mt-4 mb-2">Dr. Tim Sothee</h2>
                            <div className="flex justify-between">
                                <button className="bg-[#EAE3FF] px-4 py-1 rounded-sm text-[#9771FF]">Neurologist</button>
                                <div className="flex items-center">
                                    <GiRoundStar className="text-[#FEB60D] mr-3" />
                                    <div>
                                        <span className="font-bold">4.9</span>
                                        <span>(135)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <div>
                                    <h2 className="text-[1rem] font-bold">+1200 Patients</h2>
                                    <p>At Mount Adora Hospital, CA</p>
                                </div>
                                <div className=" flex flex-col items-center py-2">
                                    <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full border hover:text-white hover:bg-[#0067FF]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#181A1E] p-4 rounded-md flex flex-col  shadow hover:shadow-md">
                        <img className="w-full" src="https://i.ibb.co/5jstG51/Group-18549-2.png" alt="" />
                        <div>
                            <h2 className="text-2xl font-bold mt-4 mb-2">Dr. Matt Henry</h2>
                            <div className="flex justify-between">
                                <button className="bg-[#CCF0F3] px-4 py-1 rounded-sm text-[#01B5C5]">Dermatologist</button>
                                <div className="flex items-center">
                                    <GiRoundStar className="text-[#FEB60D] mr-3" />
                                    <div>
                                        <span className="font-bold">4.9</span>
                                        <span>(215)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <div>
                                    <h2 className="text-[1rem] font-bold">+6400 Patients</h2>
                                    <p>At Mount Adora Hospital, CA</p>
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

export default Doctors;