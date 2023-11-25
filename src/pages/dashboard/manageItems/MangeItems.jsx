
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';
import useMenu from './../../../components/hooks/useMenu';
import MangeItem from './MangeItem';
const MangeItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecuire = useAxiosSecure();

    // delete menu item
    const handleDeleteMenu = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecuire.delete(`/menu/${_id}`);
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your item has been deleted.",
                    icon: "success"
                });
            }
        });

    }
    return (
        <div className='overflow-y-auto'>
            <table className="min-w-full border border-white">
                <thead>
                    <tr className="bg-orange-600 text-left text-white">
                        <th className="py-2 px-4 font-semibold">Image</th>
                        <th className="py-2 px-4 font-semibold">Name</th>
                        <th className="py-2 px-4 font-semibold">Price</th>
                        <th className="py-2 px-4 font-semibold">Edit</th>
                        <th className="py-2 px-4 font-semibold">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {menu?.map((item) => <MangeItem key={item?._id} item={item} handleDeleteMenu={handleDeleteMenu} />)}
                </tbody>
            </table>
        </div>
    );
};

export default MangeItems;