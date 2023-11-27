import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseSingleUser from "../../../components/hooks/UseSingleUser";



const Profile = () => {
    const { user } = useAuth();
    const [userInfo] = UseSingleUser();
    console.log(userInfo);

    return (
        <div className="p-4">
            <h2 className="font-bold text-2xl">Profile</h2>

            <div className="relative">
                {userInfo?.map(info => <>
                    <div className="shadow-md rounded p-4 grid grid-cols-2 gap-6 mt-8">
                        <div className="flex items-center gap-6">
                            <div>
                                <img className="w-32 h-32 rounded-full" src={info?.avatar} alt="" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">{info?.name}</h2>
                                <p className="text-gray-800 mb-2"><span className="">Role: </span><span>{info?.role}</span></p>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-800 mb-2"><span className="font-bold">Email: </span><span>{info?.email}</span></p>
                            <p className="text-gray-800 mb-2"><span className="font-bold">Blood group: </span><span>{info?.blood}</span></p>
                            <p className="text-gray-800 mb-2"><span className="font-bold">District: </span><span>{info?.district}</span></p>
                            <p className="text-gray-800 mb-2"><span className="font-bold">Upazila: </span><span>{info?.upazila}</span></p>
                            <p className="text-gray-800 mb-2"><span className="font-bold">Status: </span><span>{info?.status}</span></p>
                        </div>
                    </div>
                </>)}
                <Link to={`/dashboard/updateProfile`}><FaRegEdit className="absolute top-2 right-2 cursor-pointer" /></Link>
            </div>
        </div>
    );
};

export default Profile;

