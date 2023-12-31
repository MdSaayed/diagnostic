import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiFillFacebook, AiFillGoogleSquare } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import Swal from "sweetalert2";
import useAxiosPublic from "../components/hooks/useAxiosPublic";


const Signin = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const [errEmail, setErrEmail] = useState('');
    const [errPass, setErrPass] = useState('');
    const from = (location.state?.from?.pathname) || '/dashboard/profile';
    console.log(location);

    // handle google signin
    const handleGoogleSignin = () => {
        googleSignIn()
            .then(res => {
                // toast.success('Login successfully.');
                const userInfo = {
                    name: res.user?.displayName,
                    email: res.user?.email,
                    district: '',
                    upazila: '',
                    blood: '',
                    avatar: res.user.photoUrl,
                    role: 'user',
                    status: 'active',
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => console.log(res.data))
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login successfully.",
                    showConfirmButton: false,
                    timer: 1500
                });
                location.state ? navigate(location.state) : navigate('/');
            })
            .then(err => console.log(err));
    }

    const handleSignInUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setErrEmail('');
        setErrPass('');

        if (email == '') {
            setErrEmail('Please enter your eamil.')
        }
        if (password == '') {
            setErrPass('Please enter your password.')
        }

        if (email && password) {
            signInUser(email, password)
                .then(res => {
                    toast.success('Login successfully.');
                    // Swal.fire({
                    //     position: "top-end",
                    //     icon: "success",
                    //     title: "Login successfully.",
                    //     showConfirmButton: false,
                    //     timer: 1500
                    // });
                    navigate(from);
                })
                .catch(err => console.log(err))
        }
    }



    return (
        <div className="relative bg-[url('https://i.ibb.co/kMFCXF9/img-2.png')] bg-no-repeat bg-left-top bg-[#f3f3f3]  dark:bg-[#121212]">
            <div className="absolute right-0 bottom-0 bg-[url('https://i.ibb.co/SBVLKSc/img-1.png')] bg-no-repeat bg-right-bottom w-1/2 h-1/2">
                {/* The above div creates the second background image on the right-bottom */}
            </div>
            <div className="flex items-center justify-center h-screen w-full max-w-6xl mx-auto">
                <div className='bg-white dark:bg-[#26272D] p-8 rounded shadow-md z-30'>
                    <div className='mb-6'>
                        <h2 className='text-xl text-center dark:text-white font-bold'>SIGNIN INTO YOUR ACCOUNT</h2>
                    </div>
                    <form onSubmit={handleSignInUser} className="w-[300px]">
                        <div className="relative mb-6">
                            <input className="border-b py-1 px-2 w-full focus:outline-none  dark:bg-[#121212]" placeholder='Email Address' type="email" name="email" id="" /><br />
                            <AiOutlineMail className='absolute top-2 text-xl right-2 dark:text-white' />
                            {
                                errEmail ? <p className="text-[12px] text-red-600 -mb-[15px]">{errEmail}</p> : ''
                            }
                        </div>
                        <div className="relative mb-6">
                            <input className="border-b py-1 px-2 w-full focus:outline-none dark:bg-[#121212]" placeholder='Password' type="password" name="password" id="" /><br />
                            <RiLockPasswordLine className='absolute  text-xl top-2 right-2 dark:text-white' />
                            {
                                errPass ? <p className="text-[12px] text-red-600 -mb-[15px]">{errPass}</p> : ''
                            }
                        </div>
                        <div className="mb-6">
                            <input className='bg-[#153CF5] text-white py-2 w-full rounded-sm cursor-pointer' type="submit" value="SignIn" />
                        </div>
                    </form>
                    <div>
                        <div className="flex justify-between dark:text-white text-sm -mt-4 mb-6">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Remember me</label>
                            </div>
                            <Link>Forget Your Password?</Link>
                        </div>
                        <div className="relative w-full flex items-center justify-center mb-6">
                            <div className="w-full border-t border-gray-300"></div>
                            <div className="flex items-center">
                                <span className="bg-white dark:bg-[#121212] px-2 text-gray-500 text-base mx-auto absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">Or Login With</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-center mb-6 '>
                            <AiFillFacebook className='text-blue-600 text-3xl dark:text-white' />
                            <AiFillGoogleSquare onClick={() => handleGoogleSignin()} className='text-red-600 text-3xl cursor-pointer dark:text-white' />
                        </div>
                        <div>
                            <p className='text-center dark:text-white'>Don't have an account? <Link to={'/signup'} className='cursor-pointer text-[#153CF5]'>Register here</Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Signin;