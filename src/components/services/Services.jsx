
import { IoIosArrowRoundForward } from 'react-icons/io';
import SectionHeading from '../sectionHeading/SectionHeading';



const Services = () => {
    return (
        <div className="max-w-6xl mx-auto py-24">
            <SectionHeading heading={`Providing the best <br />medical services`} desc={`World-class care for everyone. Our health System offers<br /> unmatched, expert health care.`} textStyle='center' />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12">
                <div className="text-[#181A1E] p-4 rounded-md flex flex-col items-center hover:shadow-md">
                    <img className="w-1/3" src="https://i.ibb.co/H4WhJ8P/61-doctor.png" alt="" />
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mt-4 mb-2">Find a Doctor</h2>
                        <p>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
                        <div className=" flex flex-col items-center py-2">
                            <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full hover:text-white hover:bg-[#0067FF] border" />
                        </div>
                    </div>
                </div>
                <div className="text-[#181A1E] p-4 rounded-md flex flex-col items-center hover:shadow-md">
                    <img className="w-1/2" src="https://i.ibb.co/qjkXFnt/Group-18543.png" alt="" />
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mt-4 mb-2">Find a Location</h2>
                        <p>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
                        <div className=" flex flex-col items-center py-2">
                            <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full hover:text-white hover:bg-[#0067FF] border" />
                        </div>
                    </div>
                </div>
                <div className="text-[#181A1E] p-4 rounded-md flex flex-col items-center hover:shadow-md">
                    <img className="w-1/2" src="https://i.ibb.co/VWjGTcF/15-calendar-outline.png" alt="" />
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mt-4 mb-2">Book Appointment</h2>
                        <p>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
                        <div className=" flex flex-col items-center py-2">
                            <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full hover:text-white hover:bg-[#0067FF] border" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;