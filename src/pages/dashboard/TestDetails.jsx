import { IoMdTime } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';
import { useLoaderData } from 'react-router-dom';
import { format } from 'date-fns';
import { FiDollarSign } from "react-icons/fi";
import Swal from 'sweetalert2';
import Payment from '../../components/payement/Payment';
import UserStatus from '../../components/hooks/UserStatus';
import { AiOutlineBank } from "react-icons/ai";



const TestDetails = () => {
    const [userStatus] = UserStatus();
    const { testName, image, details, slot, time, date, price, _id } = useLoaderData();
    const testBooking = {
        testName,
        testId: _id,
        price,
        status: 'pending',
        slot: slot - 1
    }

    const formatDate = (dateString) => {
        const parsedDate = new Date(dateString);
        return format(parsedDate, 'MMMM dd, yyyy');
    };


    return (
        <div className='max-w-6xl mx-auto py-16'>
            <div>
                <div className=''>
                    <img className='w-full h-[300px] object-fill rounded-sm' src={image} alt="" />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 py-6'>
                    <div className='col-span-3'>
                        <h2 className="text-3xl font-bold mb-3">{testName}</h2>
                        <p>{details}</p>
                    </div>
                    <div>
                        <div className='border px-4 py-8 mt-8 md:mt-0'>
                            <div className="flex gap-2 items-center mb-3"><IoMdTime className="text-[17px]"></IoMdTime> <span className="text-[14px]">{time}</span></div>
                            <div className="flex gap-2 items-center mb-3"><AiOutlineBank className="text-[17px]"></AiOutlineBank> <span className="text-[14px]">Available slots:{slot}</span></div>
                            <div className="flex gap-2 items-center mb-3"><SlCalender className="text-[14px]" /> <span className="text-[14px]">{formatDate(date)}</span></div>
                            <div className="flex gap-2 items-center mb-3"><FiDollarSign className="text-[14px]" /> <span className="text-[14px]">{price}</span></div>
                            <div className="mt-8">
                                {
                                    (slot < 1 && (
                                        <button className='py-1 px-4 w-full rounded-md bg-[#0066ffa4] text-white'>Book Now</button>
                                    )) ||
                                    (userStatus === 'blocked' && (
                                        <button onClick={() => document.getElementById('my_modal_blocked').showModal()} className='py-1 px-4 w-full rounded-md bg-[#0066ffa4] text-white'>Book Now</button>
                                    )) || (
                                        <button onClick={() => document.getElementById('my_modal_payment').showModal()} className='py-1 px-4 w-full rounded-md bg-[#0067FF] text-white'>Book Now</button>
                                    )
                                }

                            </div>


                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <dialog id="my_modal_blocked" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <div className="p-4">
                                        <p className="py-4">You can't booking anything because your status is 'blocked'</p>
                                    </div>
                                </div>
                            </dialog>

                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <dialog id="my_modal_payment" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <div id='checkout-form-modal' className='w-[30rem]  p-8'>
                                        <Payment price={price} testBooking={testBooking} />
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TestDetails;