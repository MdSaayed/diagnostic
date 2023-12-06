
import { FaStar } from "react-icons/fa";
import SectionHeading from "../sectionHeading/SectionHeading";


const Review = () => {
    return (
        <div className="max-w-6xl mx-auto py-16">
            <SectionHeading heading={`What our patient say`} desc={`Grateful patients praise our compassionate care,<br/> expertise, and commitment to ensuring positive health outcomes.`} textStyle={'center'} />
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
                    <p className='mt-2'>“Outstanding service! The diagnostic center provided quick and accurate results for my tests. The staff was friendly and the facility was clean. I highly recommend their services.”</p>
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
                    <p className='mt-2'>“Great experience at the diagnostic center. The staff was professional and efficient. Results were delivered promptly, and the process was smooth. Overall, a reliable and convenient service.”</p>
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
                    <p className='mt-2'>“I was impressed by the level of expertise and attention to detail at this diagnostic center. The staff explained the procedures thoroughly, making me feel at ease. Fast and reliable results. Definitely a top-notch facility!”</p>
                </div>
            </div>
        </div>
    );
};

export default Review;