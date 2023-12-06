import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import { useState } from "react";
import { GrClose } from 'react-icons/gr';
import { HiBars3 } from 'react-icons/hi2';
import { IoIosLogOut } from 'react-icons/io';
import UserStatus from './../hooks/UserStatus';


const Header = () => {
    const { signOutUser, user } = useContext(AuthContext);
    const [menu, setMenu] = useState(false);
    const [userStatus] = UserStatus();
    const handleSignOutUser = () => {
        signOutUser()
            .then(res => toast('SignOut successfull.'))
            .catch(err => console.log(err))
    }


    return (
        <div className="bg-gradient-to-r from-[#d0f8fc6c] to-[#fcebc4] z-50">
            {/* mobile and tablet navbar */}
            <nav className="md:flex justify-between items-center py-2 max-w-6xl mx-auto flex lg:hidden p-2 lg:px-0">
                <ul>
                    <li><NavLink className={'text-xl font-extrabold'}><p className='text-2xl text blod font-bold text-[#4E545F]'>Cure Vista</p>
                    </NavLink></li>
                </ul>
                <ul>
                    <div className="flex gap-3 items-center">
                        {
                            user ? <>
                                <li className="text-center uppercase">
                                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active font-semibold text-[10px]" : "text-[#4E545F]"}>{user?.displayName}</NavLink>
                                </li>
                                <li>
                                    <img className="w-[30px] h-[30px] rounded-full" src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/8xpdsJy/user-demo.png'} alt="" />
                                </li>
                            </> : ''
                        }
                        <HiBars3 onClick={() => setMenu(!menu)} className="text-2xl text-[#4E545F]" />
                    </div>

                    <ul className={menu ? "flex items-center gap-6 relative" : 'hidden'}>
                        <ul className={'flex shadow-sm flex-col justify-center absolute -top-9 z-10 bg-white items-center -right-2 h-[100vh] gap-4 w-[300px]'}>
                            <GrClose onClick={() => setMenu(!menu)} className={'absolute top-4 left-2 z-10'} />

                            <li className="text-xl">
                                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-black font-semibold" : ""}>Home</NavLink>
                            </li>

                            {
                                user && userStatus !== 'blocked' ? <>
                                    <li>
                                        <NavLink to="/dashboard/profile" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-black font-semibold" : ""}>Dashboard</NavLink>
                                    </li>
                                </> : <>
                                    <li>
                                        <NavLink onClick={() => document.getElementById('my_modal_3').showModal()} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-black font-semibold" : ""}>Dashboard</NavLink>
                                    </li>
                                </>
                            }
                            <li className="text-xl">
                                <NavLink to="/appointment" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-black font-semibold" : ""}>Appointment</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/allTest" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-black font-semibold" : ""}>All Test</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/doctors" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-black font-semibold" : ""}>Doctors</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-black font-semibold" : ""}>About US</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-black font-semibold" : ""}>Contact</NavLink>
                            </li>
                            {
                                user ? <>
                                    <li className="text-xl">
                                        <NavLink onClick={handleSignOutUser} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-black" : "text-black"}>Logout</NavLink>
                                    </li>
                                </> :
                                    <>
                                        <li className="text-xl">
                                            <NavLink to="/signin" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-black font-semibold" : "text-black"}>Signin</NavLink>
                                        </li>
                                    </>
                            }

                        </ul>
                    </ul>
                </ul>
            </nav>

            {/* desktop navbar  */}
            <nav className="md:hidden justify-between items-center py-2 max-w-6xl mx-auto hidden lg:flex">
                <ul>
                    <li><NavLink className={'text-xl font-extrabold'}><p className='text-2xl text blod font-bold text-[#4E545F]'>Cure Vista</p>
                    </NavLink></li>
                </ul>
                <ul className="flex items-center gap-6">
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#4E545F] font-semibold" : "text-[#4E545F]"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/appointment" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#4E545F] font-semibold" : "text-[#4E545F]"}>Appointment</NavLink>
                    </li>
                    <li>
                        <NavLink to="/allTest" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#4E545F] font-semibold" : "text-[#4E545F]"}>All Test</NavLink>
                    </li>
                    <li>
                        <NavLink to="/doctors" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#4E545F] font-semibold" : "text-[#4E545F]"}>Doctors</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#4E545F] font-semibold" : "text-[#4E545F]"}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#4E545F] font-semibold" : "text-[#4E545F]"}>Contact</NavLink>
                    </li>

                    {
                        userStatus == 'blocked' ? <>
                            <li>
                                <NavLink onClick={() => document.getElementById('my_modal_3').showModal()} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#4E545F] font-semibold" : "text-[#4E545F]"}>Dashboard</NavLink>
                            </li>

                        </> : <></>
                    }
                    {
                        user?.email ? <>
                            <li>
                                <NavLink to="/dashboard/profile" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#4E545F] font-semibold" : "text-[#4E545F]"}>Dashboard</NavLink>
                            </li>
                        </> : <></>
                    }

                    {
                        user ? <>
                            <ul className="flex gap-1 items-center">
                                <li className='ml-4'>
                                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#4E545F] font-semibold" : "text-[#4E545F]"}>{user?.displayName}</NavLink>
                                </li>
                                <li>
                                    <img className="w-[30px] h-[30px] rounded-full" src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/8xpdsJy/user-demo.png'} alt="" />
                                </li>
                            </ul>
                            <li>
                                <NavLink onClick={handleSignOutUser} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active font-semibold" : "text-[#4E545F]"}><IoIosLogOut className="text-[1.3rem] text-[#4E545F]" /></NavLink>
                            </li>

                        </> :
                            <>
                                <li>
                                    <NavLink to="/signin" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#4E545F] font-semibold" : "text-[#4E545F]"}>Signin</NavLink>
                                </li>
                            </>
                    }
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className="p-4">
                                <p className="py-4">You can't access your dashboard, because your status is 'blocked'</p>
                            </div>
                        </div>
                    </dialog>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
