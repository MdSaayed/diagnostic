import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import UserTable from "./UserTable";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecuire = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecuire.get('/users');
            return res.data;
        }
    });

    // handle delete users
    const handleDeleteUser = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "User has been deleted.",
                    icon: "success"
                });
                axiosSecuire.delete(`users/${_id}`)
                    .catch(err => console.log(err));
                refetch();
            }
        });
    }

    // handel make admin
    const handleMakeAdmin = (_id) => {
        axiosSecuire.patch(`/users/admin/${_id}`)
            .then(res => {
                toast.success('User role has been updated.');
                refetch();
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div>
                <h2>TOTAL USERS: {users?.length}</h2>
                {console.log(users)}
            </div>
            <div>
                <table className="min-w-full border border-white">
                    <thead>
                        <tr className="bg-orange-600 text-left text-white">
                            <th className="py-2 px-4 font-semibold">Name</th>
                            <th className="py-2 px-4 font-semibold">Email</th>
                            <th className="py-2 px-4 font-semibold">Role</th>
                            <th className="py-2 px-4 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user) => <UserTable key={user?._id} user={user} handleDeleteUser={handleDeleteUser} handleMakeAdmin={handleMakeAdmin} />)}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default AllUsers;