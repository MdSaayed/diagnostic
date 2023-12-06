import useAuth from "../../hooks/useAuth";
import { FaGooglePlusG } from "react-icons/fa";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                navigate('/');
            })
            .cath(err => console.log(err))
    }
    return (
        <div className="flex items-center justify-center py-4 text-2xl">
            <FaGooglePlusG className="cursor-pointer" onClick={handleGoogleSignIn} />
        </div>
    );
};

export default SocialLogin;