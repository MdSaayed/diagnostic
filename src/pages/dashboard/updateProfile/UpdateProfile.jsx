import { toast } from "react-toastify";
import UseSingleUser from "../../../components/hooks/UseSingleUser";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const UpdateProfile = () => {
    const { user } = useAuth();
    const [userInfo, refetch] = UseSingleUser();
    const axiosSecuire = useAxiosSecure();
    const { name, email, district, upazila, blood } = userInfo[0];

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const district = form.district.value;
        const upazila = form.upazila.value;
        const blood = form.blood.value;

        const updateInfo = { name, email, district, upazila, blood }
        const res = await axiosSecuire.put(`updateUser/${user?.email}`, updateInfo);
        if (res) {
            toast.success('Upadeted your profile.');
            refetch();
        }
    };

    return (
        <div className="p-4">
            <div>
                <h2 className="font-bold text-2xl text-center mb-8">Update Your Profile</h2>
                <div className="flex justify-center w-full">
                    <form onSubmit={handleUpdate} className="w-[400px]" action="">
                        <div className="mb-2">
                            <label className="font-bold" htmlFor="name">Name*</label> <br />
                            <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" defaultValue={name} type="text" name="name" />
                        </div>
                        <div className="mb-2">
                            <label className="font-bold" htmlFor="email">Email*</label><br />
                            <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" defaultValue={email} type="text" name="email" />
                        </div>
                        <div className="mb-2">
                            <label className="font-bold" htmlFor="district">District*</label><br />
                            <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" defaultValue={district} type="text" name="district" />
                        </div>
                        <div className="mb-2">
                            <label className="font-bold" htmlFor="upazila">Upazila*</label><br />
                            <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" defaultValue={upazila} type="text" name="upazila" />
                        </div>
                        <div className="mb-2">
                            <label className="font-bold" htmlFor="blood">Blood Gorup*</label><br />
                            <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" defaultValue={blood} type="text" name="blood" />
                        </div>
                        <div>
                            <input className="bg-[#0067FF] cursor-pointer text-center text-white rounded py-1 px-6" type="submit" value="Update Profile" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default UpdateProfile;