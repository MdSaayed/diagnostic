import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


const Signin = () => {
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = (location.state?.from?.pathname) || '/';
    console.log(location);


    const handleSignInUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(res => {
                toast('Login successfully.');
                navigate(from);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="bg-[url('https://i.ibb.co/2YHpxhw/Rectangle-75.png')] py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg border-2 p-16 mt-16 max-w-6xl mx-auto h-screen items-center justify-center gap-12">
                <div>
                    <form onSubmit={handleSignInUser}>
                        <label className='font-semibold' htmlFor="email">Your Email</label>
                        <input className='py-1 px-2 border rounded-sm focus:outline-none w-full mb-2' type="email" name="email" placeholder="Enter your email" /><br />
                        <label className='font-semibold' htmlFor="password">Password</label>
                        <input className='py-1 px-2 border rounded-sm focus:outline-none w-full mb-2' type="password" name="password" placeholder="Enter your password" /><br />
                        <input className='py-1 px-2 rounded mt-2 w-full text-white bg-[#D1A054]' type="submit" value="SignIn" />
                    </form>
                </div>
                <div>
                    <img src="https://i.ibb.co/3fnjHVb/authentication2-1.png" alt="" />
                </div>
            </div>
        </div>
    )
};

export default Signin;