
import { FaStar } from "react-icons/fa";
import SectionHeading from "../sectionHeading/SectionHeading";


const Review = () => {
    return (
        <div className="max-w-6xl mx-auto py-16">
            <SectionHeading heading={`What our patient say`} desc={`World-class care for everyone. Our health System <br/>offers unmatched, expert health care.`} textStyle={'center'} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-16">
                <div className='hover:bg-[#0067FF] rounded p-4 hover:shadow hover:text-white'>
                    <div className='flex gap-4'>
                        <img src="https://i.ibb.co/4Rm8XzK/Rectangle-3969.png" alt="" />
                        <div>
                            <h2 className='font-bold text-xl'>Joe Root</h2>
                            <div className='flex'>
                                <FaStar className='text-[#FEB60D]' />
                                <FaStar className='text-[#FEB60D]' />
                                <FaStar className='text-[#FEB60D]' />
                                <FaStar className='text-[#FEB60D]' />
                                <FaStar className='text-[#FEB60D]' />
                            </div>
                        </div>
                    </div>
                    <p className='mt-2'>“I have taken medical services from them. They treat so well and they are provding the best medical services.”</p>
                </div>
                <div className='hover:bg-[#0067FF] rounded p-4 hover:shadow hover:text-white'>
                    <div className='flex gap-4'>
                        <img src="https://i.ibb.co/S3014M4/Rectangle-3969-2.png" alt="" />
                        <div>
                            <h2 className='font-bold text-xl'>Alex Hales</h2>
                            <div className='flex'>
                                <FaStar className='text-[#FEB60D]' />
                                <FaStar className='text-[#FEB60D]' />
                                <FaStar className='text-[#FEB60D]' />
                                <FaStar className='text-[#FEB60D]' />
                                <FaStar className='text-[#FEB60D]' />
                            </div>
                        </div>
                    </div>
                    <p className='mt-2'>“I have taken medical services from them. They treat so well and they are provding the best medical services.”</p>
                </div>
                <div className='hover:bg-[#0067FF] rounded p-4 hover:shadow hover:text-white'>
                    <div className='flex gap-4'>
                        <img src="https://i.ibb.co/60JTY9s/Rectangle-3969-1.png" alt="" />
                        <div>
                            <h2 className='font-bold text-xl'>Jos Buttler</h2>
                            <div className='flex'>
                                <FaStar className='text-[#FEB60D]' />
                                <FaStar className='text-[#FEB60D]' />
                                <FaStar className='text-[#FEB60D]' />
                                <FaStar className='text-[#FEB60D]' />
                                <FaStar className='text-[#FEB60D]' />
                            </div>
                        </div>
                    </div>
                    <p className='mt-2'>“I have taken medical services from them. They treat so well and they are provding the best medical services.”</p>
                </div>
            </div>
        </div>
    );
};

export default Review;