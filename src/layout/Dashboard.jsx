import React from 'react';
import { Link, NavLink, Outlet } from "react-router-dom";
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
import UserStatus from '../components/hooks/UserStatus';
import { FaPlusCircle } from "react-icons/fa";
import { LuTestTube2 } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { GrCheckboxSelected } from "react-icons/gr";






const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [userStatus] = UserStatus();


    // const blcokedUser = userInfo.status;
    console.log(userStatus);

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-black p-4">
                <ul className="text-white font-medium text-xl flex flex-col gap-3">
                    {
                        isAdmin ? <>
                            <li className="flex items-center gap-2 w-full">
                                <NavLink to='/dashboard' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active p-1 rounded text-white font-semibold text-[1rem] flex gap-2 gap-2 items-center" : "text-[1rem] leading-5 flex gap-2 items-center text-white"}><IoMdHome />Admin Home</NavLink>
                            </li>
                            <li className="flex items-center gap-2">
                                <NavLink to='/dashboard/addTest' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-[#e5e7eb] p-1 rounded text-black font-semibold active-d-nav text-[1rem]" : "text-[1rem] leading-5 flex gap-2 items-center "}><FaPlusCircle />Add a test</NavLink>
                            </li>
                            <li className="flex items-center gap-2">
                                <NavLink to='/dashboard/banners' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-[#e5e7eb] p-1 rounded text-black font-semibold active-d-nav text-[1rem]" : "text-[1rem] leading-5 flex gap-2 items-center "}><FaPlusCircle />Banner</NavLink>
                            </li>
                            <li className="flex items-center gap-2 ">
                                <NavLink to='/dashboard/showBanners' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-[#e5e7eb] p-1 rounded text-black font-semibold active-d-nav text-[1rem]" : "text-[1rem] leading-5 flex gap-2 items-center text-white "}><GrCheckboxSelected />Show Banners</NavLink>
                            </li>
                            <li className="flex items-center gap-2">
                                <NavLink to='/dashboard/users' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-[#e5e7eb] p-1 rounded text-black font-semibold active-d-nav text-[1rem]" : "text-[1rem] leading-5 flex gap-2 items-center "}><FaUser />All Users</NavLink>
                            </li>
                            <li className="flex items-center gap-2">
                                <NavLink to='/dashboard/allTestTable' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-[#e5e7eb] p-1 rounded text-black font-semibold active-d-nav text-[1rem]" : "text-[1rem] leading-5 flex gap-2 items-center "}><LuTestTube2 />All Test</NavLink>
                            </li>
                            <li className="flex items-center gap-2">
                                <NavLink to='/dashboard/allAppointment' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-[#e5e7eb] p-1 rounded text-black font-semibold active-d-nav text-[1rem]" : "text-[1rem] leading-5 flex gap-2 items-center "}><CiCalendar />All Appointment</NavLink>
                            </li>
                            <li className="flex items-center gap-2">
                                <NavLink to='/dashboard/testReport' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-[#e5e7eb] p-1 rounded text-black font-semibold active-d-nav text-[1rem]" : "text-[1rem] leading-5 flex gap-2 items-center "}><TbBrandBooking />Reservation</NavLink>
                            </li>
                            <li className="flex items-center gap-2">
                                <NavLink to='/dashboard/profile' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-[#e5e7eb] p-1 rounded text-black font-semibold active-d-nav text-[1rem]" : "text-[1rem] leading-5 flex gap-2 items-center "}><CgProfile />Profile</NavLink>
                            </li>
                        </> : <>
                            {
                                userStatus !== 'blocked' ? <>
                                    <li className="flex items-center gap-2">
                                        <NavLink to='/dashboard/cart' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-[#e5e7eb] p-1 rounded text-black font-semibold active-d-nav text-[1rem]" : "text-[1rem] leading-5 flex gap-2 items-center "}><IoMdHome />User Home</NavLink>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <NavLink to='/dashboard/upcomingAppointments' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-[#e5e7eb] p-1 rounded text-black font-semibold active-d-nav text-[1rem]" : "text-[1rem] leading-5 flex gap-2 items-center "}><FaCalendarDays />Upcoming appointments</NavLink>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <NavLink to='/dashboard/paymentHistory' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-[#e5e7eb] p-1 rounded text-black font-semibold active-d-nav text-[1rem]" : "text-[1rem] leading-5 flex gap-2 items-center "}><MdOutlinePayment />Payment Histroy</NavLink>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <NavLink to='/dashboard/testResult' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-[#e5e7eb] p-1 rounded text-black font-semibold active-d-nav text-[1rem]" : "text-[1rem] leading-5 flex gap-2 items-center "}> <PiTestTubeFill />Test Result</NavLink>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <NavLink to='/dashboard/profile' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-[#e5e7eb] p-1 rounded text-black font-semibold active-d-nav text-[1rem]" : "text-[1rem] leading-5 flex gap-2 items-center "}><CgProfile />Profile</NavLink>
                                    </li>
                                </> : <></>
                            }
                        </>
                    }

                </ul>
            </div>
            <div className="w-full">
                <div className="py-2 bg-black text-white flex justify-end px-8"> <Link to='/'>Go Home</Link> </div>
                <div className="w-full p-4">
                    <Outlet />
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;


