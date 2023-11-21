import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import useAxiosPublic from '../components/hooks/useAxiosPublic';
import SocialLogin from '../components/socialLogin/SocialLogin';

const SignUp = () => {
    const { createUser, signOutUser } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = {
            name,
            email
        }

        createUser(email, password)
            .then(res => {
                toast('Account create successfully');
                signOutUser();
                axiosPublic.post('/users', userInfo)
                    .then(res => < Navigate to={'signin'} />)
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="bg-[url('https://i.ibb.co/2YHpxhw/Rectangle-75.png')] py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg border-2 p-16 mt-16 max-w-6xl mx-auto h-screen items-center justify-center gap-12">
                <div>
                    <form onSubmit={handleSignUp}>
                        <label className='font-semibold' htmlFor="name">Your Name</label>
                        <input className='py-1 px-2 border rounded-sm focus:outline-none w-full mb-2' type="name" name="name" placeholder="Enter your name" /><br />
                        <label className='font-semibold' htmlFor="email">Your Email</label>
                        <input className='py-1 px-2 border rounded-sm focus:outline-none w-full mb-2' type="email" name="email" placeholder="Enter your email" /><br />
                        <label className='font-semibold' htmlFor="password">Password</label>
                        <input className='py-1 px-2 border rounded-sm focus:outline-none w-full mb-2' type="password" name="password" placeholder="Enter your password" /><br />
                        <input className='py-1 px-2 rounded mt-2 w-full text-white bg-[#D1A054]' type="submit" value="Sign Up" />
                    </form>
                    <SocialLogin />
                </div>
                <div>
                    <img src="https://i.ibb.co/3fnjHVb/authentication2-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;