import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";






const Footer = () => {
    return (
        <div className="bg-gradient-to-l from-[#01b5c511]">
            <div className='max-w-6xl mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-8">
                    <div className='space-y-3'>
                        <h2 className="font-bold text-2xl ">Cure Vista</h2>
                        <p>Copyright ©2022 Cure Vista all rights reserved.</p>
                        <div className='flex gap-4'>
                            <button className='hover:bg-[#0067FF] hover:text-white border  text-black p-2 text-[10px] rounded-full'><FaFacebookF /></button>
                            <button className='hover:bg-[#0067FF] hover:text-white border  text-black p-2 text-[10px] rounded-full'><FaTwitter /></button>
                            <button className='hover:bg-[#0067FF] hover:text-white border  text-black p-2 text-[10px] rounded-full'><FaLinkedinIn /></button>
                            <button className='hover:bg-[#0067FF] hover:text-white border  text-black p-2 text-[10px] rounded-full'><FaInstagram /></button>
                        </div>
                    </div>
                    <div className="flex mt-8 md:mt-8 lg:mt-0 lg:justify-between gap-8 lg:gap-3">
                        <div>
                            <h2 className="font-medium text-xl">About</h2>
                            <div className="flex flex-col gap-3 mt-4">
                                <Link>About us</Link>
                                <Link>Virtual visit</Link>
                                <Link>Petients portal</Link>
                                <Link>Quality & Patient Safety</Link>
                                <Link>Career opportunities</Link>
                                <Link>Location</Link>
                                <Link>Education & Training</Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-medium text-xl">I want to:</h2>
                            <div className="flex flex-col gap-3 mt-4">
                                <Link>Request an Appointment</Link>
                                <Link>Find a Doctor</Link>
                                <Link>Get a Opinion</Link>
                                <Link>Learn Condition</Link>
                                <Link>Make a Referral</Link>
                                <Link>Find a Location</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-8 md:mt-8 lg:mt-0 lg:justify-between gap-8 lg:gap-3">
                        <div>
                            <h2 className="font-medium text-xl">Public Relations</h2>
                            <div className="flex flex-col gap-4 mt-4">
                                <Link>Blog</Link>
                                <Link>Patient Rights</Link>
                                <Link>Relation</Link>
                                <Link>Terms of use</Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-medium text-xl">Support</h2>
                            <div className="flex flex-col gap-3 mt-4">
                                <Link>Donate</Link>
                                <Link>Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap items-center justify-center gap-6 py-4 border-t text-center'>
                    <p className="font-bold">Download Our App on:</p>
                    <img src="https://i.ibb.co/WpxmRc0/App-Store-outline-badge.png" alt="" />
                    <img src="https://i.ibb.co/hfRCWJK/Google-Play-outline-badge.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;