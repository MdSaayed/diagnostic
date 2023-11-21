import { BiLogoFacebookCircle } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className='flex flex-col gap-4 items-start pl-16 md:pl-0 md:items-end bg-[#1F2937] text-white py-16 pr-16'>
                    <h2 className="text-2xl font-semibold">CONTACT US</h2>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 1750848833</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className='flex flex-col gap-4 bg-[#111827] text-white py-16 pl-16'>
                    <h2 className="text-2xl font-semibold">Follow US</h2>
                    <p>Join us on social media</p>
                    <div className='flex gap-4'>
                        <Link><BiLogoFacebookCircle /></Link>
                        <Link><BsInstagram /></Link>
                        <Link><AiFillTwitterCircle /></Link>
                    </div>
                </div>
            </div>
            <div className='bg-[#151515] py-2 text-white text-center'>
                <p>Copyright © CulinaryCloud. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;