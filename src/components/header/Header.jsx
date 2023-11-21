import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import useCart from '../hooks/useCart';
import { LuShoppingCart } from "react-icons/lu";


const Header = () => {
    const { signOutUser, user } = useContext(AuthContext);
    const handleSignOut = () => {
        signOutUser()
            .then(res => toast('SignOut successfull.'))
            .catch(err => console.log(err))
    }

    // cart item count

    const [cart] = useCart();

    return (
        <nav className='bg-[#15151580] py-2 opacity-100 z-10 fixed top-0 w-full'>
            <ul className='flex justify-between items-center max-w-6xl mx-auto'>
                <li>
                    <Link to={'/'}><img className='w-2/4' src='https://i.ibb.co/khvFmT9/Group-1.png' alt='Logo'></img></Link>
                </li>
                <ul className='flex gap-4 text-white'>
                    <li><Link to={'/'}>HOME</Link></li>
                    <li><Link to={'/contact'}>CONTACT US</Link></li>
                    <li><Link to={'/dashboard'}>DASHBOARD</Link></li>
                    <li><Link to={'/menu'}>OUR MENU</Link></li>
                    <li><Link to={'/order/dessert'}>OUR SHOP</Link></li>
                    <li><Link to={'dashboard/cart'}>
                        <LuShoppingCart className='relative' />
                        <span className='absolute -top-[2px] ml-2 bg-red-600 text-white rounded-full items-center justify-center text-[12px] w-6 h-6 p-1'>{cart.length}</span>
                    </Link></li>
                    {
                        user?.email ? <li><Link onClick={handleSignOut}>LOGOUT</Link></li> : <>
                            <li><Link to={'/signin'}>SIGNIN</Link></li>
                            <li><Link to={'/signup'}>SIGNUP</Link></li>
                        </>
                    }
                </ul>
            </ul>
        </nav>
    );
};

export default Header;
