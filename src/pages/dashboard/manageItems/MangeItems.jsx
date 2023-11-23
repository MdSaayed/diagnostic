
import useMenu from './../../../components/hooks/useMenu';
import MangeItem from './MangeItem';
const MangeItems = () => {
    const [menu] = useMenu();
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
                    {menu?.map((item) => <MangeItem key={item?._id} item={item} />)}
                </tbody>
            </table>
        </div>
    );
};

export default MangeItems;