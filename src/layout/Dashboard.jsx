import { NavLink, Outlet } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { FaCalendarDays } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { FaAd, FaBook, FaList, FaUser, FaUtensils } from "react-icons/fa";
import useAdmin from "../components/hooks/useAdmin";


const Dashboard = () => {
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-black p-4">
                <ul className="text-white font-medium text-xl flex flex-col gap-3">
                    {
                        isAdmin ? <>
                            <li className="flex items-center gap-2"><IoMdHome /><NavLink to='/dashboard/adminHome'>Admin Home</NavLink></li>
                            <li className="flex items-center gap-2"><FaUtensils /><NavLink to='/dashboard/additems'>Add Items</NavLink></li>
                            <li className="flex items-center gap-2"><FaList /><NavLink to='/dashboard/manageItems'>Manage Items</NavLink></li>
                            <li className="flex items-center gap-2"><FaBook /><NavLink to='/dashboard/bookings'>Manage Booking</NavLink></li>
                            <li className="flex items-center gap-2"><FaUser /><NavLink to='/dashboard/users'>All Users</NavLink></li>
                        </> : <>
                            <li className="flex items-center gap-2"><BsCartFill /><NavLink to='/dashboard/cart'>Cart</NavLink></li>
                            <li className="flex items-center gap-2"><IoMdHome /><NavLink to='/dashboard/cart'>User Home</NavLink></li>
                            <li className="flex items-center gap-2"><FaCalendarDays /><NavLink to='/dashboard/cart'>Reservation</NavLink></li>
                            <li className="flex items-center gap-2"><MdOutlinePayment /><NavLink to='/dashboard/cart'>Payment Histroy</NavLink></li>
                            <li className="flex items-center gap-2"><MdOutlineReviews /><NavLink to='/dashboard/cart'>Add review</NavLink></li>
                            <li className="flex items-center gap-2"><TbBrandBooking /><NavLink to='/dashboard/cart'>My Booking</NavLink></li>
                        </>
                    }
                </ul>
            </div>
            <div className="w-full p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;