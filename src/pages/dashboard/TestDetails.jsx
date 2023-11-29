import { IoMdTime } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';
import { useLoaderData } from 'react-router-dom';
import { format } from 'date-fns';
import { FiDollarSign } from "react-icons/fi";
import Swal from 'sweetalert2';
import Payment from '../../components/payement/Payment';


const TestDetails = () => {
    const { testName, image, details, slot, date, price, _id } = useLoaderData();
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
                <div className='grid grid-cols-1 lg:grid-cols-4 py-6'>
                    <div className='col-span-3'>
                        <h2 className="text-3xl font-bold mb-3">{testName}</h2>
                        <p>{details}</p>
                    </div>
                    <div className='border p-4 mt-8 md:mt-0'>
                        <div className="flex gap-2 items-center mb-3"><IoMdTime className="text-[17px]"></IoMdTime> <span className="text-[14px]">{slot}</span></div>
                        <div className="flex gap-2 items-center mb-3"><SlCalender className="text-[14px]" /> <span className="text-[14px]">{formatDate(date)}</span></div>
                        <div className="flex gap-2 items-center mb-3"><FiDollarSign className="text-[14px]" /> <span className="text-[14px]">{price}</span></div>
                        <div className="mt-8">
                            <button onClick={() => document.getElementById('my_modal_3').showModal()} className='py-1 px-4 w-full rounded-md bg-[#0067FF] text-white'>Book Now</button>
                        </div>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <dialog id="my_modal_3" className="modal">
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
    );
};

export default TestDetails;