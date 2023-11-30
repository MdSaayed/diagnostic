import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaCalendarDays } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import useAdmin from "../components/hooks/useAdmin";
import { CgProfile } from "react-icons/cg";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PiTestTubeFill } from "react-icons/pi";




const Dashboard = () => {
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-black p-4">
                <ul className="text-white font-medium text-xl flex flex-col gap-3">
                    {
                        isAdmin ? <>
                            <li className="flex items-center gap-2"><IoMdHome /><NavLink to='/dashboard/adminHome' className='text-[1rem] leading-5'>Admin Home</NavLink></li>
                            <li className="flex items-center gap-2"><IoMdHome /><NavLink to='/dashboard/addTest' className='text-[1rem] leading-5'>Add a test</NavLink></li>
                            <li className="flex items-center gap-2"><FaUser /><NavLink to='/dashboard/users'>All Users</NavLink></li>
                            <li className="flex items-center gap-2"><FaUser /><NavLink to='/dashboard/allTestTable'>All Test</NavLink></li>
                            <li className="flex items-center gap-2"><TbBrandBooking /><NavLink to='/dashboard/allAppointment' className='text-[1rem] leading-5'>All Appointment</NavLink></li>
                            <li className="flex items-center gap-2"><TbBrandBooking /><NavLink to='/dashboard/testReport' className='text-[1rem] leading-5'>Reservation</NavLink></li>
                        </> : <>
                            <li className="flex items-center gap-2"><IoMdHome /><NavLink to='/dashboard/cart' className='text-[1rem] leading-5'>User Home</NavLink></li>
                            <li className="flex items-center gap-2"><FaCalendarDays /><NavLink to='/dashboard/upcomingAppointments' className='text-[1rem] leading-5'>Upcoming appointments</NavLink></li>
                            <li className="flex items-center gap-2"><MdOutlinePayment /><NavLink to='/dashboard/paymentHistory' className='text-[1rem] leading-5'>Payment Histroy</NavLink></li>
                            <li className="flex items-center gap-2"><PiTestTubeFill /><NavLink to='/dashboard/testResult' className='text-[1rem] leading-5'>Test Result</NavLink></li>
                            <li className="flex items-center gap-2"><CgProfile /><NavLink to='/dashboard/profile' className='text-[1rem] leading-5'>Profile</NavLink></li>
                        </>
                    }
                </ul>
            </div>
            <div className="w-full">
                <div className="py-2 bg-black"></div>
                <div className="w-full p-4">
                    <Outlet />
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;